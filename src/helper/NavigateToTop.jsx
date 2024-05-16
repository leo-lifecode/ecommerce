import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ScrollNavigateToTop = () => {
  const {pathname} = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
