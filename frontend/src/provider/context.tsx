import {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type Conrdinat = [number, number];
const contextContext = createContext({
  setPickup: (_event: Conrdinat) => {},
  setDropoff: (_event: Conrdinat) => {},
  pickup: null as null | Conrdinat,
  dropoff: null as null | Conrdinat,
  isStoreNewCordinate: false,
  setIsStoreNewCordinate: (_event: boolean) => {},
});

contextContext.displayName = " context context";

interface ProviderProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {}
export default function Provider({ children }: ProviderProps) {
  const [isStoreNewCordinate, setIsStoreNewCordinate] = useState(false);
  const [pickup, setPickup] = useState<[number, number] | null>(null);
  const [dropoff, setDropoff] = useState<[number, number] | null>(null);

  const handleSetPicup = (e: Conrdinat) => {
    setPickup(e);
  };
  const handleSetDropeOff = (e: Conrdinat) => {
    setDropoff(e);
  };

  const handleIsStoreNewCondinate = (e: boolean) => {
    setIsStoreNewCordinate(e);
  };

  return (
    <contextContext.Provider
      value={{
        pickup,
        dropoff,
        isStoreNewCordinate,
        setPickup: handleSetPicup,
        setDropoff: handleSetDropeOff,
        setIsStoreNewCordinate: handleIsStoreNewCondinate,
      }}
    >
      {children}
    </contextContext.Provider>
  );
}

export function usecontext() {
  const context = useContext(contextContext);

  if (!context) throw Error("use hook inside  context provider");

  return context;
}
