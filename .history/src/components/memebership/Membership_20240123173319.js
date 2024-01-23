/** @format */

import React, { useEffect, useState } from "react";
import { View_description } from "../../Helper/Herlper";
import {
  getProfile,
  getSubscription,
  MembershipFaq,
} from "../../Repository/Api";
import FAQ from "../Helper/FAQ";
import MembershipCard from "./MembershipCard";

const Membership = () => {
  const [response, setResponse] = useState([]);
  const [profile, setProfile] = useState({});
  const [faq, setFaq] = useState([]);

  const fetchSubscription = () => {
    getSubscription(setResponse);
  };

  const fetchProfile = () => {
    getProfile(setProfile);
  };

  useEffect(() => {
    fetchSubscription();
    fetchProfile();
    MembershipFaq(setFaq);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);


  const fetchAll = () => {
    fetchSubscription()
    fetchProfile()
  }

  function ShipHandler(query) {
    const TotolData = response?.filter((i) =>
      i?.plan?.toLowerCase().includes(query?.toLowerCase())
    );
    return TotolData;
  }

  const stylePara = {
    textAlign: "center",
    fontSize: "20px",
    color: "rgb(229 216 150)",
    padding: "20px",
  };

  const getItems = faq?.map((i, index) => ({
    key: index,
    label: <View_description description={i.question} />,
    children: <View_description description={i.answer} />,
  }));

  return (
    <section className="bg-primary MemberShip">
      <h1 className="text-5xl font-light text-secondary text-center py-14 box-border">
        Membership
      </h1>
      <h6 style={stylePara} className="memn_in_mobile">
        Our membership programs are designed to give you a variety of fabulous
        monthly treatments at a very affordable price. Like any fitness or diet
        plan, consistency is the key to success. These memberships help you
        achieve more beautiful skin by promoting frequent and effective skin
        rejuvenation treatments plus a host of other beauty benefits.
      </h6>
      <div className=" Membersip_new_contaimer">
        <MembershipCard
          medal="/Image/72.png"
          price={`$${ShipHandler(`silver`)?.[0]?.price}`}
          type={ShipHandler(`silver`)?.[0]?.plan}
          require={`${
            ShipHandler(`silver`)?.[0]?.month
          } MONTH COMMITMENT REQUIRED`}
          bg={"silver"}
          list={ShipHandler(`silver`)?.[0]?.details}
          id={ShipHandler(`silver`)?.[0]?._id}
          term={ShipHandler(`silver`)?.[0]?.term}
          isSubscription={profile?.isSubscription}
          fetchAll={fetchAll}
        />
        <MembershipCard
          medal="/Image/73.png"
          price={`$${ShipHandler(`gold`)?.[0]?.price}`}
          type={ShipHandler(`gold`)?.[0]?.plan}
          require={`${
            ShipHandler(`gold`)?.[0]?.month
          } MONTH COMMITMENT REQUIRED`}
          bg={"gold"}
          list={ShipHandler(`gold`)?.[0]?.details}
          id={ShipHandler(`gold`)?.[0]?._id}
          isSubscription={profile?.isSubscription}
          term={ShipHandler(`gold`)?.[0]?.term}
        />
        <MembershipCard
          medal="/Image/74.png"
          price={`$${ShipHandler(`platinum`)?.[0]?.price}`}
          type={ShipHandler(`platinum`)?.[0]?.plan}
          require={`${
            ShipHandler(`platinum`)?.[0]?.month
          } MONTH COMMITMENT REQUIRED`}
          bg={"platinum"}
          list={ShipHandler(`platinum`)?.[0]?.details}
          id={ShipHandler(`platinum`)?.[0]?._id}
          isSubscription={profile?.isSubscription}
          term={ShipHandler(`platinum`)?.[0]?.term}
        />
        <MembershipCard
          medal="/Image/75.png"
          price={`$${ShipHandler(`diamond`)?.[0]?.price}`}
          type={ShipHandler(`diamond`)?.[0]?.plan}
          require={`${
            ShipHandler(`diamond`)?.[0]?.month
          } MONTH COMMITMENT REQUIRED`}
          bg={"diamond"}
          list={ShipHandler(`diamond`)?.[0]?.details}
          id={ShipHandler(`diamond`)?.[0]?._id}
          isSubscription={profile?.isSubscription}
          term={ShipHandler(`diamond`)?.[0]?.term}
        />
      </div>
      <h1 className="text-5xl font-light text-secondary text-center py-14 box-border">
        Membership FAQ's
      </h1>
      <FAQ response={getItems} />
    </section>
  );
};

export default Membership;
