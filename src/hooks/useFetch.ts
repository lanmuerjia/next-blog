import {
  useQuery,
  UseQueryOptions,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function useFetchByQuery<TData, TError>(
  options: UseQueryOptions<TData, TError>,
) {
  const { isFetching, isFetched, ...rest } = useQuery<TData, TError>(options);

  if (isFetching) {
    NProgress.start();
  }

  if (isFetched) {
    NProgress.done();
  }

  return { isFetching, isFetched, ...rest };
}

function useFetchByMutation<TData, TError, TVariables>(
  options: UseMutationOptions<TData, TError, TVariables>,
) {
  return useMutation<TData, TError, TVariables>({
    ...options,
    onSettled: () => {
      NProgress.start();
    },
    onSuccess: () => {
      NProgress.done();
    },
    onError: () => {
      NProgress.done();
    },
  });
}

export { useFetchByQuery, useFetchByMutation };
