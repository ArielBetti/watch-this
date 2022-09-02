import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";

// recoil: atoms
import { atomToken, atomUser } from "../../store/atoms";

// components
import Loader from "../../components/Loader";

// ::
const Logout = () => {
  const navigateTo = useNavigate();

  // recoil: states
  const user = useRecoilValue(atomUser);
  const resetUser = useResetRecoilState(atomUser);
  const resetToken = useResetRecoilState(atomToken);

  // logout function
  const logoutSection = () => {
    resetUser();
    resetToken();
  };

  useEffect(() => {
    if (!user) {
      navigateTo('/');
    }
  }, [user]);

  useEffect(() => {
    logoutSection();
  }, []);

  return <Loader disclaimer="Saindo..." open />;
};

export default Logout;
