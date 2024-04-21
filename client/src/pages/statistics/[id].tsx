import React, { FC, useEffect, useState } from "react";
import { IDays } from "@/interfaces/days.interface";
import { getDays } from "@/services/getDays.service";
import Layout from "@/components/Layout";
import SmokingStat from "@/components/SmolingStat";

const Statistics: FC<IDays> = () => {
  const [days, setDays] = useState<IDays | any>([]);
  useEffect(() => {
    const fetchDays = async () => {
      try {
        const days = await getDays();
        setDays(days);
      } catch (error) {
        console.error("Ошибка при загрузке дней:", error);
      }
    };

    fetchDays();
  }, []);
  return (
    <div className={"h-screen"}>
      <Layout>
        <SmokingStat days={days} />
      </Layout>
    </div>
  );
};

export default Statistics;
