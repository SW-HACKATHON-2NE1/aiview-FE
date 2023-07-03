import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

interface TokenContextType {
  getToken: () => string;
}

const TokenContext = createContext<TokenContextType>({
  getToken() {
    throw new Error("unsubscribed context!");
  },
});

async function fetchToken() {
  const { token } = await fetch("https://aiview.shop/").then((res) =>
    res.json()
  );
  return token;
}

export function useToken() {
  return useContext(TokenContext);
}

export default function TokenContextProvider({
  children,
}: React.PropsWithChildren) {
  const router = useRouter();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    if (!token) fetchToken().then(setToken);
  }, []);

  const getToken = () => {
    if (!token) {
      alert("이런! 토큰이 사라졌습니다!");
      fetchToken().then(setToken);
      throw router.push("/");
    }

    return token;
  };

  return (
    <TokenContext.Provider value={{ getToken }}>
      {children}
    </TokenContext.Provider>
  );
}
