import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthError,
  authIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authError = useSelector(selectAuthError);
  const authIsLoading = useSelector(selectAuthError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
    authIsLoading,
  };
};
