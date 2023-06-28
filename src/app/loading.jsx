import Image from "next/image";
export default function loading() {
  return (
    <div className="flex justify-center">
      {/* <Image className="h-96" src="spinner.svg" alt="loading..." /> */}

      <Image
        src="/spinner.svg"
        width={200}
        height={200}
        style={{
          maxWidth: "100%",
          height: "100%",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="loading..."
      ></Image>
    </div>
  );
}
