import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const id = router.query["id"];

  return <>Movie 페이지 #{id}</>;
}
