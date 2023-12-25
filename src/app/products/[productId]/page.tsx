import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((reslove) => {
//     setTimeout(() => {
//       reslove(`iphone ${params.productId}`);
//     }, 100);
//   });
//   return {
//     title: `Product ${title}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((reslove) => {
    setTimeout(() => {
      reslove(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function PrductDetailsPage({ params }: Props) {
  return <h1>Details of the Product Page {params.productId}</h1>;
}
