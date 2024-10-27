import Image from "next/image";

const pilarSmartCity = [
    {
        title: "Smart Governance",
        id: "governance",
        icon: "/smargovernance.svg",
        content: (
            <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Ekosistem TIK SPBE.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Standar proses bisnis, data, teknologi, dan keamanan
                    informasi.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Kapasitas SDM yang tidak anti perubahan.
                </li>
            </ul>
        ),
    },
    {
        title: "Smart Environment",
        id: "environment",
        icon: "/smartenvironment.svg",
        content: (
            <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Penata kelolaan lingkungan yang harmonis antar ekosistem
                    yang terkait.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Pengembangan potensi bencana menjadi sumber daya produktif
                    (seperti banjir menjadi sumber listrik).
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Pengendalian lingkungan melalui pemanfaatan TIK.
                </li>
            </ul>
        ),
    },
    {
        title: "Smart Branding",
        id: "branding",
        icon: "/smartbranding.svg",
        content: (
            <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Mengembangkan branding kota yang tertib, teratur, aman,
                    modern, dan canggih.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Pengembangan pusat-pusat inovasi.
                </li>
            </ul>
        ),
    },
    {
        title: "Smart Economy",
        id: "economy",
        icon: "/smarteconomy.svg",
        content: (
            <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Implementasi cashless.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Interkoneksi sektor ekonomi mikro, medium, dan makro yang
                    aman melalui teknologi tercanggih secara aktual.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Memenuhi kebutuhan masyarakat melalui monitoring kecukupan
                    ekonomi berbasis keluarga.
                </li>
            </ul>
        ),
    },
    {
        title: "Smart Living",
        id: "living",
        icon: "/smartliving.svg",
        content: (
            <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Pengembangan wilayah terpadu antara pemukiman, dunia usaha,
                    dan pendidikan yang terpadu.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Jaminan keamanan dan kenyamanan hidup masyarakat melalui
                    pemanfaatan TIK.
                </li>
            </ul>
        ),
    },
    {
        title: "Smart Society",
        id: "society",
        icon: "/smartsociety.svg",
        content: (
            <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Pengembangan masyarakat digital yang sehat, inovatif, dan
                    produktif.
                </li>
                <li className="flex items-center gap-2">
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={20}
                        height={20}
                        className="block sm:hidden"
                    />
                    <Image
                        src="/centang.svg"
                        alt="alt"
                        width={40}
                        height={40}
                        className="hidden sm:block"
                    />
                    Masyarakat yang adaptif dengan kecanggihan teknologi
                    terbaru.
                </li>
            </ul>
        ),
    },
];

export default pilarSmartCity;
