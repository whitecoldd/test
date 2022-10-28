import{ useState, useEffect } from "react";
import { publicRequest } from "./requestApi";

export default function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [spin, setSpin] = useState(false);
    useEffect(() => {
        const getData = async () => {
          try {
            const res = await publicRequest.get(url);
            setData(res.data[0]);
          } catch (e) {
            setError(e)
          }
          finally{
            setSpin(false)
          }
        };
        getData();
      }, [url]);
    return {data, error, spin};
}
