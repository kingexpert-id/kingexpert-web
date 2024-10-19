import Image from "next/image";

const Address = () => {
  return (
    <div className="flex flex-col max-w-sm pt-14 gap-5">
      <div className="flex gap-2">
        <div>
          <Image
            src="/images/location.png"
            alt="location"
            width={40}
            height={30}
          />
        </div>

        <p className="text-xs">
          Gedung AD Premier Office Park Lantai 9, Jl. TB Simatupang No. 5,
          Kelurahan Ragunan, Kecamatn Pasar Minggu, Jakarta Selatan
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <Image src="/images/sms.png" alt="location" width={20} height={30} />
        </div>

        <p className="text-xs">contact@kingexpert.id</p>
      </div>
    </div>
  );
};

export default Address;
