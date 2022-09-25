import {DependencyList, EffectCallback, useEffect, useRef} from "react";

// useEffect helper that only gets called on updates and ignores initial call
export const useDidUpdate = (callback: EffectCallback, dependencies: DependencyList) => {
  const didMountRef = useRef(false);

  useEffect(() => { // block first call of the hook and forward each consecutive one
    if (didMountRef.current) {
      callback();
    } else {
      didMountRef.current = true;
    }
  }, dependencies);
};
