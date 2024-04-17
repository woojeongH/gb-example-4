import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import Button1 from "@/ui1/Button1";

const Ui2 = () => {
  const { isLoading, status, data, refetch } = useQuery({
    queryKey: ["repoData"],
    gcTime: 0,
    staleTime: 0,
    enabled: false,
    queryFn: () =>
      axios.get(
        "https://open.assembly.go.kr/portal/openapi/ncocpgfiaoituanbr?AGE=21&BILL_NO=2106221&Type=json",
      ),
  });

  const onClick = useCallback(() => {
    console.log(refetch());
  }, [refetch]);

  return (
    <>
      <h2>tan stack query (react query) </h2>
      <p>isLoading: {isLoading.toString()}</p>
      <p>status: {status}</p>
      <div>
        result : <pre>{JSON.stringify(data)}</pre>
      </div>
      <div>
        <Button1 color="#FFC470" onClick={onClick}>
          load
        </Button1>
      </div>
    </>
  );
};

export default Ui2;
