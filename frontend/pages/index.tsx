import Head from 'next/head'
import styles from '../styles/index.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/Layout'
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { getBikesData } from "../lib/bike"

// //SSRの場合
// export async function getServerSideProps(context) {
//   const allBikesData = await getBikesData(); 
//   console.log(allBikesData);

//   return {
//     props: {
//       allBikesData,
//     }
//   }
// }

//SSGの場合
export async function getStaticProps() {
  const res = await getBikesData(); 
  const allBikesData = res.params.json;
  console.log(allBikesData);

  return {
    props: {
      allBikesData,
    },
  }
}


export default function Home({ allBikesData } :any) {

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.main_inner}>
          <div className={styles.side_menue}>
            <p>絞り込み</p>
            <div>
               <p>メーカー</p>
               <div>
                 <p>ホンダ</p>
                 <p>ヤマハ</p>
                 <p>スズキ</p>
                 <p>カワサキ</p>
               </div>
            </div>
          </div>
          <div>
            <h2 className={styles.title}>バイク一覧</h2>
            <div className={styles.bike_index}>
              {allBikesData.map(({name, price, maker,id}:{id: string, price: number, maker: string, name: string}) => (
                <article className={styles.article}>
                  <Link href={`/bike/${id}`}>
                    <a >
                      <div>
                        <p className={`${utilStyles.font_small}`}>{maker}</p>
                        <p className={`${utilStyles.font_bold}`}>{name}</p>
                        <p className={`${utilStyles.font_small}`}> 
                          <span className={`${utilStyles.font_bold} ${utilStyles.font_normal}`}>{price}</span>
                          　円
                        </p>
                        {/* <img src={ind_img_path} className={styles.bike_img} /> */}
                      </div>
                    </a>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main> 
     </Layout>
     
   )
 }