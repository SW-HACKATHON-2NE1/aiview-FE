class VideoRecorder {
  public video: HTMLVideoElement | null = null;
  public mediaRecorder: MediaRecorder | null = null;
  public readonly chunks: Blob[] = [];

  public async startVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 60, height: 75 },
    });
    if (!this.video) return;
    this.video.srcObject = stream;
    this.video.play();
  }

  public startRecorder() {
    if (!this.video || !this.video.srcObject) return;

    const handleDataAvailable = (event: BlobEvent) => {
      if (event.data.size > 0) this.chunks.push(event.data);
      this.downloadRecordedVideo();
    };

    this.mediaRecorder = new MediaRecorder(this.video.srcObject as MediaStream);
    this.mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
    this.mediaRecorder.start();
  }

  public stopRecorder() {
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }
  }

  public downloadRecordedVideo() {
    const blob = new Blob(this.chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "recorded_video.webm";
    link.click();
    URL.revokeObjectURL(url);
  }
}

export default VideoRecorder;
