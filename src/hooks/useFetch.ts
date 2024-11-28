import {
  useQuery,
  UseQueryOptions,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { start, done } from "nprogress";
import "nprogress/nprogress.css";

/**
 * @function useFetchByQuery
 * @param options
 */
function useFetchByQuery<TData, TError>(
  options: UseQueryOptions<TData, TError>,
) {
  const { isFetching, isFetched, ...rest } = useQuery<TData, TError>(options);
  if (isFetching) start();
  if (isFetched) done();
  return { isFetching, isFetched, ...rest };
}

/**
 * @function useFetchByMutation
 * @param options
 */
function useFetchByMutation<TData, TError, TVariables>(
  options: UseMutationOptions<TData, TError, TVariables>,
) {
  return useMutation<TData, TError, TVariables>({
    ...options,
    onSettled: () => start(),
    onSuccess: () => done(),
    onError: () => done(),
  });
}

export { useFetchByQuery, useFetchByMutation };
