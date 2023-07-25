import Banner from "@/components/Banner";

export const metadata = {
  title: "ສິດ ແລະ ພາລະບົດບາດ",
};

const Page = () => {
  return (
    <>
      <Banner text={`ສິດ ແລະ ພາລະບົດບາດ`} />
      <section className="flex flex-col items-center justify-center min-h-screen gap-10 py-6">
        <div className="max-w-2xl collapse collapse-arrow bg-base-200 ">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="text-xl font-bold collapse-title">
            ສິດ ແລະ ໜ້າທີ່ດ້ານນິຕິບັນຍັດ
          </div>
          <div className="collapse-content">
            <p>ສະພາແຫ່ງຊາດ ມີ ສິດ ແລະ ໜ້າທີ່ດ້ານນິຕິບັນຍັດ ດັ່ງນີ້:</p>
            <p>1. ພິຈາລະນາ,ຮັບຮອງເອົາ ລັດຖະທຳມະນູນ ແລະ ກົດໝາຍ;</p>
            <p>
              2. ພິຈາລະນາ, ຮັບຮອງເອົາແຜນການສ້າງ ແລະ ປັບປຸງກົດໝາຍ ຕະຫຼອດອາຍຸການ
              ຂອງຕົນ;
            </p>
            <p>
              3. ພິຈາລະນາ,ຮັບຮອງເອົາ ການຍົກເລີກ, ລົບລ້າງ ການເຂົ້າຮ່ວມສົນທິສັນຍາ
              ທີ່ ສປປ ລາວເປັນພາຄີ ແລະ ສັນຍາສາກົນໃນລະດັບລັດ
              ຕາມການສະເໜີຂອງນາຍົກລັດຖະມົນຕີ;
            </p>
            <p>4. ພິຈາລະນາ, ຮັບຮອງເອົາ ທິດທາງວຽກງານ ຫ້າປີ ຂອງສະພາແຫ່ງຊາດ;</p>
            <p>
              5.ພິຈາລະນາ, ຮັບຮອງເອົາ ທິດທາງວຽກງານ ຫ້າປີ ຂອງ
              ອົງການໄອຍະການປະຊາຊົນສູງສຸດ, ສານປະຊາຊົນສູງສຸດ ແລະ
              ອົງການກວດສອບແຫ່ງລັດ;
            </p>
            <p>
              6. ຍົກເລີກນິຕິກຳ ຂອງພາກສ່ວນຕ່າງໆ ທີ່ຂັດກັບ ລັດຖະທຳມະນູນ ແລະ
              ກົດໝາຍ, ຍົກເວັ້ນຄຳຕົກລົງກ່ຽວກັບການດຳເນີນຄະດີຂອງ
              ອົງການໄອຍະການປະຊາຊົນ ແລະສານປະຊາຊົນ;
            </p>
            <p>
              7. ມອບສິດໃຫ້ຄະນະປະຈຳສະພາແຫ່ງຊາດ ຕົກລົງວຽກງານທີ່ຈຳເປັນແລະ ຮີບດ່ວນ
              ແລ້ວລາຍງານຕໍ່ກອງປະຊຸມສະພາແຫ່ງຊາດ.
            </p>
          </div>
        </div>
        <div className="max-w-2xl collapse collapse-arrow bg-base-200 ">
          <input type="radio" name="my-accordion-2" />
          <div className="text-xl font-bold collapse-title">
            ສິດ ແລະ ໜ້າທີ່ດ້ານການຕົກລົງບັນຫາສຳຄັນພື້ນຖານຂອງປະເທດຊາດ
          </div>
          <div className="collapse-content">
            <p>
              ສະພາແຫ່ງຊາດ ມີ ສິດ ແລະ
              ໜ້າທີ່ດ້ານການຕົກລົງບັນຫາສຳຄັນພື້ນຖານຂອງປະເທດຊາດ ດັ່ງນີ້:
            </p>
            <p className="my-2 font-semibold">1. ດ້ານການເມືອງ ແລະ ການປົກຄອງ:</p>
            <p>
              1.1. ພິຈາລະນາ, ຮັບຮອງເອົາ ບັນຫາຄວາມໝັ້ນຄົງ, ຄວາມປອດໄພ, ບັນຫາສົງຄາມ
              ຫຼື ສັນຕິພາບ ແລະ ການໃຫ້ນິລະໂທດກຳ ຕາມການສະເໜີ
              ຂອງຄະນະປະຈຳສະພາແຫ່ງຊາດ;
            </p>
            <p>
              1.2. ພິຈາລະນາ, ຮັບຮອງເອົາ ເຂດແດນຂອງແຂວງ, ນະຄອນຫຼວງ ຕາມການສະເໜີ
              ຂອງນາຍົກລັດຖະມົນຕີ;
            </p>
            <p>
              1.3. ພິຈາລະນາ ຍຸບສະພາປະຊາຊົນຂັ້ນແຂວງ ໃນກໍລະນີ ສະພາປະຊາຊົນນັ້ນ
              ຫາກໄດ້ສ້າງຄວາມເສຍຫາຍຢ່າງຫຼວງຫຼາຍ ຕໍ່ຜົນປະໂຫຍດຂອງປະເທດຊາດ ແລະ
              ປະຊາຊົນ;
            </p>
            <p>
              1.4. ລົງມະຕິບໍ່ໄວ້ວາງໃຈສະມາຊິກລັດຖະບານທ່ານໃດໜຶ່ງ ຫຼື ທັງໝົດຄະນະ
              ຕາມການສະເໜີຂອງຄະນະປະຈຳສະພາແຫ່ງຊາດ ຫຼື ຢ່າງໜ້ອຍ ໜຶ່ງສ່ວນສີ່
              ຂອງຈຳນວນສະມາຊິກ ສະພາແຫ່ງຊາດທັງໝົດເປັນຜູ້ສະເໜີ.
            </p>
            <p className="my-2 font-semibold">2. ດ້ານເສດຖະກິດ-ສັງຄົມ:</p>
            <p>
              2.1. ພິຈາລະນາ, ຮັບຮອງເອົາ ແຜນຍຸດທະສາດ, ແຜນພັດທະນາເສດຖະກິດ-ສັງຄົມ,
              ແຜນງົບປະມານແຫ່ງລັດ, ການດັດແກ້ແຜນງົບປະມານແຫ່ງລັດ ແລະ
              ດັດແກ້ແຜນການລົງທຶນຂອງລັດ;
            </p>
            <p>
              2.2. ພິຈາລະນາ, ຮັບຮອງເອົາ ນະໂຍບາຍພື້ນຖານດ້ານການເງິນ, ເງິນຕາ,
              ການດັດ ແກ້ອັດຕາສ່ວນການຂາດດຸນງົບປະມານ, ອັດຕາສ່ວນໜີ້ສິນຂອງລັດຖະບານ,
              ອັດຕາສ່ວນໜີ້ສິນ ສາທາລະນະ;
            </p>
            <p>
              2.3. ພິຈາລະນາ, ຮັບຮອງເອົາ ການກຳນົດ, ການປ່ຽນແປງ, ການຍົກເລີກ,
              ການລົບລ້າງ ອັດຕາພາສີ ແລະ ອາກອນ;
            </p>
            <p>
              2.4. ພິຈາລະນາ, ຮັບຮອງເອົາ ໂຄງການລະດັບຊາດ, ໂຄງການຂະໜາດໃຫຍ່ ທີ່ມີ
              ຜົນກະທົບຕໍ່ ສິ່ງແວດລ້ອມ ແລະ ສັງຄົມ;
            </p>
            <p>
              2.5. ພິຈາລະນາ, ຮັບຮອງເອົາ ບົດສະຫຼຸບຂາດຕົວ
              ການຈັດຕັ້ງປະຕິບັດງົບປະມານແຫ່ງລັດ.
            </p>
            <p className="my-2 font-semibold">
              {" "}
              3. ດ້ານການຈັດຕັ້ງ ແລະ ບຸກຄະລາກອນ:
            </p>
            <p className="my-2 font-semibold">3.1. ດ້ານການຈັດຕັ້ງ</p>
            <p>
              3.1.1. ພິຈາລະນາ, ຮັບຮອງເອົາ ໂຄງປະກອບກົງຈັກຂອງສະພາແຫ່ງຊາດ,
              ການສ້າງຕັ້ງ, ຍຸບເລີກ, ໂຮມເຂົ້າ, ແຍກອອກ ກຳມາທິການ ແລະ
              ຄະນະເລຂາທິການສະພາແຫ່ງຊາດ;
            </p>
            <p>3.1.2. ພິຈາລະນາ, ຮັບຮອງເອົາ ໂຄງປະກອບກົງຈັກຂອງລັດຖະບານ;</p>
            <p>
              3.1.3. ພິຈາລະນາ, ຮັບຮອງເອົາ ການສ້າງຕັ້ງ, ຍຸບເລີກ, ໂຮມເຂົ້າ, ແຍກອອກ
              ກະຊວງ, ອົງການລັດທຽບເທົ່າກະຊວງ, ແຂວງ, ນະຄອນຫຼວງ ຕາມການສະເໜີ ຂອງ
              ນາຍົກລັດ ຖະມົນຕີ.
            </p>
            <p className="my-2 font-semibold">3.2 ດ້ານບຸກຄະລາກອນ</p>
            <p>
              3.2.1. ເລືອກຕັ້ງ ຫຼື ປົດຕຳແໜ່ງ ປະທານ, ຮອງປະທານ, ກຳມະການຄະນະ
              ປະຈຳສະພາແຫ່ງຊາດ;
            </p>
            <p>
              3.2.2. ເລືອກຕັ້ງ ຫຼື ປົດຕຳແໜ່ງ ປະທານປະເທດ ແລະ ຮອງປະທານປະເທດ
              ຕາມການສະເໜີຂອງຄະນະປະຈຳສະພາແຫ່ງຊາດ;
            </p>
            <p>
              3.2.3. ເລືອກຕັ້ງ ຫຼື ປົດຕຳແໜ່ງ ນາຍົກລັດຖະມົນຕີ ຕາມການສະເໜີ ຂອງ
              ປະທານປະເທດ;
            </p>
            <p>
              3.2.4. ເລືອກຕັ້ງ ຫຼື ປົດຕຳແໜ່ງ ຫົວໜ້າອົງການໄອຍະການປະຊາຊົນສູງສຸດ,
              ປະທານສານປະຊາຊົນສູງສຸດ ແລະ ປະທານອົງການກວດສອບແຫ່ງລັດ ຕາມການສະເໜີ
              ຂອງປະທານປະເທດ;
            </p>
            <p>
              3.2.5. ພິຈາລະນາ, ຮັບຮອງເອົາ ການແຕ່ງຕັ້ງ, ການຍົກຍ້າຍ ຫຼື ການປົດຕຳ
              ແໜ່ງ ປະທານ, ຮອງປະທານກຳມາທິການ ແລະ ເລຂາທິການສະພາແຫ່ງຊາດ ຕາມການສະເໜີ
              ຂອງຄະນະປະຈຳສະພາແຫ່ງຊາດ;
            </p>
            <p>
              3.2.6. ພິຈາລະນາ, ຮັບຮອງເອົາ ການແຕ່ງຕັ້ງ, ການຍົກຍ້າຍ ຫຼື ການປົດ
              ຕຳແໜ່ງຮອງນາຍົກລັດຖະມົນຕີ ແລະ ສະມາຊິກລັດຖະບານ ຕາມການສະເໜີ ຂອງ
              ນາຍົກລັດຖະ ມົນຕີ;
            </p>
            <p>
              3.2.7. ພິຈາລະນາ, ຮັບຮອງເອົາ ການແຕ່ງຕັ້ງ, ການຍົກຍ້າຍ ຫຼື
              ການປົດຕຳແໜ່ງ ສະມາຊິກສະພາຜູ້ພິພາກສາຂອງສານປະຊາຊົນສູງສຸດ ຕາມການສະເໜີ
              ຂອງ ປະທານສານປະ ຊາຊົນສູງສຸດ.
            </p>
          </div>
        </div>
        <div className="max-w-2xl collapse collapse-arrow bg-base-200 ">
          <input type="radio" name="my-accordion-2" />
          <div className="text-xl font-bold collapse-title">
            ສິດ ແລະ ໜ້າທີ່ດ້ານການຕິດຕາມກວດກາ
          </div>
          <div className="collapse-content">
            <p>ສະພາແຫ່ງຊາດ ມີ ສິດ ແລະ ໜ້າທີ່ດ້ານການຕິດຕາມກວດກາ ດັ່ງນີ້:</p>
            <p>
              1. ຕິດຕາມກວດກາ ການປະຕິບັດ ລັດຖະທຳມະນູນ, ກົດໝາຍ, ມະຕິຂອງກອງປະຊຸມ
              ສະພາແຫ່ງຊາດ, ມະຕິຂອງຄະນະປະຈຳສະພາແຫ່ງຊາດ,
              ແຜນພັດທະນາເສດຖະກິດ-ສັງຄົມ, ແຜນງົບປະມານແຫ່ງລັດ, ໂຄງການລະດັບຊາດ ແລະ
              ໂຄງການຂະໜາດໃຫຍ່ທີ່ມີຜົນກະທົບຕໍ່ ສິ່ງແວດ ລ້ອມ ແລະ ສັງຄົມ;
            </p>
            <p>
              2. ຕິດຕາມກວດກາການປະຕິບັດໜ້າທີ່ ຂອງບຸກຄະລາກອນ ທີ່ສະພາແຫ່ງຊາດ
              ເລືອກຕັ້ງ ແລະ ບຸກຄະລາກອນ ທີ່ສະພາແຫ່ງຊາດຮັບຮອງເອົາການແຕ່ງຕັ້ງ;
            </p>
            <p>
              3. ຕິດຕາມກວດກາການຈັດຕັ້ງປະຕິບັດ ມະຕິຂອງກອງປະຊຸມສະພາແຫ່ງຊາດ ກ່ຽວກັບ
              ບົດລາຍງານການເຄື່ອນໄຫວວຽກງານ ແລະ ທິດທາງແຜນການເຄື່ອນໄຫວວຽກງານຂອງ
              ອົງການໄອຍະການປະຊາຊົນສູງສຸດ, ສານປະຊາຊົນສູງສຸດ ແລະ
              ອົງການກວດສອບແຫ່ງລັດ;
            </p>
            <p>
              4. ຕິດຕາມກວດກາ ສະພາປະຊາຊົນຂັ້ນແຂວງ ໃນການເຄົາລົບ ແລະ
              ປະຕິບັດລັດຖະທຳມະນູນ, ກົດໝາຍ, ມະຕິຂອງກອງປະຊຸມສະພາແຫ່ງຊາດ ແລະ
              ມະຕິຂອງຄະນະປະຈຳ ສະພາແຫ່ງຊາດ. (ລະບຸໄວ້ໃນມາດຕາ 8, 9, 11, 12 ແລະ 13
              ຂອງກົດໝາຍວ່າດວ້ຍສະພາແຫ່ງຊາດ ສະບັບປັບປຸ່ງປີ 2015)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;