const products = [

    {
        id:1,
        name:"Cisco Catalyst 9200 Switch",
        brand:"Cisco",
        category:"Networking",
        price:45000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cisco.com%2Fc%2Fdam%2Fassets%2Fsupport%2Fproduct-images%2Fseries%2Fswitches-catalyst-9200-series-switches-alternate1.jpg&f=1&nofb=1&ipt=fbfbe8b6adf350c935a3313a5060dde0424f2a9dd6f453e0ea72ee780ca79044",
        rating:5
    },

    {
        id:2,
        name:"Dell PowerEdge R750 Server",
        brand:"Dell",
        category:"Servers",
        price:125000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.dell.com%2Fsites%2Fcsimages%2FProduct_Imagery%2Fall%2Fpoweredge-r750-W480.png&f=1&nofb=1&ipt=d618442e6ac7425c72432a58373325992df5912cf4ddf74f1793b802c3462714",
        rating:5
    },

    {
        id:3,
        name:"Fortinet FG-100F Firewall",
        brand:"Fortinet",
        category:"Firewall",
        price:89000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:4,
        name:"HPE MSA Storage",
        brand:"HPE",
        category:"Storage",
        price:180000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F6330840fd726c770a6cfdd2e%2F634406fef451fc15b0b30a71_HPE%2520MSA%25202050%25201.png&f=1&nofb=1&ipt=1180d89a345cc2b8289ed6d2bdc193602fa61f1109dfc88541b494aecdbede75",
        rating:5
    },

    {
        id:5,
        name:"TP-Link ER8411 Router",
        brand:"TP-Link",
        category:"Networking",
        price:6000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41mUpxTsEoL._AC_SL1000_.jpg&f=1&nofb=1&ipt=6b808842477570225fcd920b6401fa1e3d839ceb2d259889ea83644231bde488",
        rating:4
    },

    {
        id:6,
        name:"Ubiquiti UniFi Network Device",
        brand:"Ubiquiti",
        category:"Wireless",
        price:12000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Ffb%2Fubiquiti_networks_u6_us_unifi_u6_access_point_1780284.jpg&f=1&nofb=1&ipt=1d8053604b6bcfc59dfd9b58118563df6050540abcdc5bc5d3ee6f7fd6109079",
        rating:5
    },

    {
        id:7,
        name:"Fiber Optic Cable Kit",
        brand:"Corning",
        category:"Networking",
        price:3500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiberoptic.is%2Fwp-content%2Fuploads%2F2025%2F05%2F15-in-1.jpg&f=1&nofb=1&ipt=c0f71f21e59da88babac2657627258a66dec8bbc95df1976f84b78839c9f9fa0",
        rating:4
    },

    {
        id:8,
        name:"LAN Cable Pack",
        brand:"Panduit",
        category:"Networking",
        price:2800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FCmple-5-PACK-7-Feet-Cat6-Ethernet-Cable-10-Gigabit-Network-Cord-Cat6-Cable-Ethernet-Patch-Cable-Computer-LAN-Internet-Cable-Snagless-RJ45-Connectors_e1b83e33-0a5c-4d62-9cab-0bf2f1e83e3f.ced0324cf253fe19c6448c19db9d9d57.jpeg&f=1&nofb=1&ipt=cde583537d7c5ea1c9d6c597495c91fc71f863759bb8483a05e2bd3bf7df86d8",
        rating:3
    },

    {
        id:9,
        name:"2 Pair Connector",
        brand:"Generic",
        category:"Accessories",
        price:120,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.V7WmRVJ9eC2KsOoVzs_xTAHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=b612b7315092ce439721afddc1c63fa25383cae985b81e0c8c1352fda040ea06",
        rating:4
    },

    {
        id:10,
        name:"25mm PVC Conduit",
        brand:"Generic",
        category:"Accessories",
        price:180,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpdg.cef.co.uk%2Fimages%2Fpdg%2Fcentaur_hg25w%2Foriginal%2Fcentaur_hg25w.jpg&f=1&nofb=1&ipt=4a64bad3a36feeecee8d68a984dd3ebaa008e518c871a4ad3e0482808d409e2d",
        rating:4
    },

    {
        id:11,
        name:"Accessories for LAN work",
        brand:"Generic",
        category:"Accessories",
        price:450,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.jHnJWiCidJRndzl2YIBSpgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=e9939bd56b6f84e3aaa08f89ed1fac686fb82d8b58c5c34981e62bb07ac63478",
        rating:4
    },

    {
        id:12,
        name:"ACER ALTOS SERVER T15 F6 EPYC 4124P 4C",
        brand:"Acer",
        category:"Server",
        price:290000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.xbsasia.ph%2Fwp-content%2Fuploads%2F2025%2F01%2Fd54f5cadcf5652cf2b4d7c9787323e2e.jpg&f=1&nofb=1&ipt=35324deb3226327c20eaae79d092981f7953f2ba36de4d7d05ce8f89528b6a21",
        rating:5
    },

    {
        id:13,
        name:"Acer Laptop ALG AL15G-53",
        brand:"Acer",
        category:"Laptop",
        price:68000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvishalperipherals.com%2Fcdn%2Fshop%2Ffiles%2Fframe-1_10_un.u2jsi.004.jpg%3Fv%3D1761550393%26width%3D1100&f=1&nofb=1&ipt=254bde982a6238fa5c43370d56cacf6963165c3a1892ac2a07b87f579ca650b1",
        rating:4
    },

    {
        id:14,
        name:"Adobe Acrobat Standard",
        brand:"Adobe",
        category:"Software",
        price:9200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.87Mjs9CVAq4puuZwYSql5wHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=279eb03acb57d2d55cfdf8cc7e530ffc5420ada7c85a6667cbc1839d404a9537",
        rating:4
    },

    {
        id:15,
        name:"Allied Telesis AT-X230-28GP Switch",
        brand:"Allied Telesis",
        category:"Networking",
        price:58000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rimaelektronik.com%2Fimages%2Fstories%2Fvirtuemart%2Fproduct%2FAllied%2520Telesis%2520AT%2520x230%252028GP%252050.jpg&f=1&nofb=1&ipt=ee6d9dc0323779c3e20aaefacb84d421c57b7de0008061b76e077a518c4a6eb5",
        rating:5
    },

    {
        id:16,
        name:"Allied Telesis SFP+ Module",
        brand:"Allied Telesis",
        category:"Networking",
        price:11500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.neweggimages.com%2FProductImage%2FA98C_1_20170616901668158.jpg&f=1&nofb=1&ipt=a47e60df5d46de05014c184c5ae107bf89ebc7bb5c34cbc5be835db787da6b02",
        rating:4
    },

    // {
    //     id:17,
    //     name:"AMC Charges",
    //     brand:"Generic",
    //     category:"Service",
    //     price:3500,
    //     stock:true,
    //     image:"img/products/servers.png",
    //     rating:3
    // },

    {
        id:18,
        name:"AMD CPU EPYC 7H12",
        brand:"AMD",
        category:"Server",
        price:190000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.jdkn5AHXUfht7l6qQTz9lAHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=8c8ebb0c80fa8897d63fa59473a8b70efec5c564913b6758ef0cf3b95e353613",
        rating:5
    },

    {
        id:19,
        name:"APC 1000VA UPS",
        brand:"APC",
        category:"Power",
        price:14500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages1000x1000%2FAPC_smc1000_Smart_UPS_C_1000VA_with_887745.jpg&f=1&nofb=1&ipt=a6ff3b1a1c7088c8f8e90fdb10d4fbc86dcabba5b62f49bab995fb44c0616473",
        rating:4
    },

    {
        id:20,
        name:"APC UPS 6KVA SRV 6K UXI-IN",
        brand:"APC",
        category:"Power",
        price:76000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2021%2F2%2FCM%2FGT%2FKW%2F66089194%2Fapc-srv6ki-6-0-kva-easy-online-ups-1000x1000.jpg&f=1&nofb=1&ipt=cf84c884aba7e07215e5ba990ca549462a73b1817e0237e7323f5812a6815e32",
        rating:5
    },

    {
        id:21,
        name:"APC UPS BVX1600LI-IN",
        brand:"APC",
        category:"Power",
        price:22000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81emXNO7rSL._AC_.jpg&f=1&nofb=1&ipt=1ab4b577152c029c5d9640ca15be86513971ed5ce3a5e8d951f0a92a0554ea23",
        rating:4
    },

    {
        id:22,
        name:"APC UPS SRV3K-RIL-IN",
        brand:"APC",
        category:"Power",
        price:41000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftecnit.com.ec%2Fwp-content%2Fuploads%2F2021%2F05%2FUps-Apc-On-line-Easy-Srv3ka-3000va-3kva-2400w-4-Tomas-120v-768x768.jpg&f=1&nofb=1&ipt=95de60a434c44d12125ed122c9051d256b9c24987dff5964a2feab2da92a589b",
        rating:4
    },

    {
        id:23,
        name:"APW 15U Rack 550x600mm",
        brand:"APW",
        category:"Rack",
        price:8200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F5%2F311842008%2FFC%2FRN%2FUT%2F83344193%2Fapc-apw-make-server-network-rack-500x500.jpg&f=1&nofb=1&ipt=fb4b8c9bcc8a4ab7a8789f573a0ec0f87d32650d8a32dc1fb679b02fbe1ca900",
        rating:4
    },

    {
        id:24,
        name:"Aruba 1930 24Port PoE Switch 370W (JL684A)",
        brand:"Aruba",
        category:"Networking",
        price:67000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage01.idefix.com%2Fresize%2F1500%2F0%2Fproduct%2F3173283%2Faruba-24port-370w-full-poe-instant-on-1930-24g-jl684a-gigabit-4xsfp-yonetilebilir-switch-rackmount-66bcdc13ba2c0.jpg&f=1&nofb=1&ipt=10de51bbecb8b9b6caeb3cef7f52ee83565c309f3c61a737e216a92503b95aa8",
        rating:5
    },

    {
        id:25,
        name:"Aruba Ap 505",
        brand:"Aruba",
        category:"Wireless",
        price:26000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.incehesap.com%2Fresim%2Ficerik%2F6038b1efb06ad.png&f=1&nofb=1&ipt=5ffbb097f8dd8657b0024e37dd7bbce51fe601661623e75129841e188a497e53",
        rating:4
    },

    {
        id:26,
        name:"Aruba AP-515 (RW) Unified AP Q9H62A",
        brand:"Aruba",
        category:"Wireless",
        price:32000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0605%2F0136%2F0804%2Ffiles%2FSEO2_06a6a41d-6083-4fa4-8d2a-6ea670efdc35.png%3Fv%3D1656666000&f=1&nofb=1&ipt=9c644e2642cb14b311dafa3427440235937ece0483d0dca2cd8ea303f30df923",
        rating:5
    },

    {
        id:27,
        name:"Aruba Instant On 1930 24G 4 SFP Switch (JL682A)",
        brand:"Aruba",
        category:"Networking",
        price:51000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cs.1worldsync.com%2Fsyndication%2Ffeeds%2Fhp-ent%2Finline-content%2FI5%2F4%2FD%2F4DDAD76236BE0680CDB522F43C3539AB92BB4FA4_feature.jpg&f=1&nofb=1&ipt=afdfe03eb3e0a7c7412c752edee34bc8948721a61fded2c01cdccb430c5a2ad8",
        rating:5
    },

    {
        id:28,
        name:"Aruba Instant On 1930 48G 4SFP Switch (JL685A)",
        brand:"Aruba",
        category:"Networking",
        price:71000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.securewirelessworks.com.au%2Fimages%2F1930-switch-series%2FJL685A.png&f=1&nofb=1&ipt=52a0bdf58a57adca3100a98a1ee0e9f34863917eb6e6a76b339d83724a8643f5",
        rating:5
    },

    {
        id:29,
        name:"Aruba Instant On 1930 8port 2SFP 124W Switch (JL681A)",
        brand:"Aruba",
        category:"Networking",
        price:46000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cs.1worldsync.com%2Fsyndication%2Ffeeds%2Fhp-ent%2Finline-content%2FI5%2F0%2F3%2F035309EEE1BFCA1926B8875CEECF581ED9E41475_feature.jpg&f=1&nofb=1&ipt=31d452d785b12903771a57725bd8e650260be949555a7668a023f6ed90226c5c",
        rating:4
    },

    {
        id:30,
        name:"Aruba Instant On AP22 (RW) R4W02",
        brand:"Aruba",
        category:"Wireless",
        price:17000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F56199%2F56198269%2Fimages%2Fres_6367824ec5412d8424852a6a33fa5f68.jpg&f=1&nofb=1&ipt=2d8e461c740383c70bf8a75a2b6fdc496a2b7866f82b74f561a1ecded64db8f2",
        rating:4
    },

    {
        id:31,
        name:"Aruba InstantOn 1830 24G Switch JL812A",
        brand:"Aruba",
        category:"Networking",
        price:28000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.securewirelessworks.com.au%2Fimages%2FSwitches%2F1830-series%2FJL812A.png&f=1&nofb=1&ipt=4a8b2a1dd6e8234bf1cc3494c488ca95b968ef1dd4e12b83294faf30555b0989",
        rating:4
    },

    {
        id:32,
        name:"Aruba InstantOn AP21 Access Point",
        brand:"Aruba",
        category:"Wireless",
        price:15000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-xod9czzp97%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F2059%2F4298%2F1064636810__25241.1716596025.jpg%3Fc%3D1%3Fimbypass%3Don&f=1&nofb=1&ipt=c6d1dbec7c2c101d9781349c72fd2d6012c2f826accb95d011963eaedb2e29f8",
        rating:4
    },

    {
        id:33,
        name:"Aruba InstantOn AP25",
        brand:"Aruba",
        category:"Wireless",
        price:18000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcdigital.com.mx%2Fwp-content%2Fuploads%2F2023%2F04%2FR9B28A.png&f=1&nofb=1&ipt=9df33c87498a001b6c321d1c723247da25e8d6ac364239038ba2a9bea28ce0bf",
        rating:4
    },

    {
        id:34,
        name:"Aruba InstantOn JL813A PoE Switch 1830",
        brand:"Aruba",
        category:"Networking",
        price:31000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mwave.com.au%2Fimages%2F400%2Fjl813a_ac71999_9413.jpg&f=1&nofb=1&ipt=3802e88f179da23f26a232758e18e1c8e167f39f4e43fd1fca7b2911493e1150",
        rating:4
    },

    {
        id:35,
        name:"Aruba JL683A 1930 24 Port PoE Switch",
        brand:"Aruba",
        category:"Networking",
        price:42000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwifi.fpt.net%2Fwp-content%2Fuploads%2F2021%2F03%2FAruba_IO_1930_24Gclass4_PoE_4SFP_SFP_195Wswtch_FT-scaled.jpg&f=1&nofb=1&ipt=16cff981ad44160294af6dd909065c0f4146b746d6204fbe71f59e15d58582fb",
        rating:5
    },

    {
        id:36,
        name:"Aruba JL683B 1930 24G 4SFP+ 195W",
        brand:"Aruba",
        category:"Networking",
        price:46000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.securewirelessworks.com.au%2Fimages%2F1930-switch-series%2FJL683A.png&f=1&nofb=1&ipt=d3a6679b5200de6394be7c3efcdab7b4f90cae42be87161daaba31d30b9bf4b4",
        rating:5
    },

    {
        id:37,
        name:"Aruba JL684B 1930 24G 4SFP+370W Switch",
        brand:"Aruba",
        category:"Networking",
        price:48000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.securewirelessworks.com.au%2Fimages%2F1930-switch-series%2FJL684A.png&f=1&nofb=1&ipt=cd1f156168a76efe859d605ac289393cd316cac310f53555f0e8095b5c35ce5e",
        rating:5
    },

    {
        id:38,
        name:"Aruba JL686B 1930 48P Class 4 PoE 4 SFP+ 370W Switch",
        brand:"Aruba",
        category:"Networking",
        price:56000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.securewirelessworks.com.au%2Fimages%2F1930-switch-series%2FJL686A.png&f=1&nofb=1&ipt=7cabb5a9841950c41c4c399b2cebbce36e2d5077589898a6dad4ddf97d2ca569",
        rating:5
    },

    {
        id:39,
        name:"Aruba Mountin Kit",
        brand:"Aruba",
        category:"Accessories",
        price:1200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.idealo.com%2Ffolder%2FProduct%2F205913%2F7%2F205913757%2Fs2_produktbild_max%2Frackmount-it-hpe-aruba-1930-8g-2530-8g-rack-mount-kit-rm-hp-t1.jpg&f=1&nofb=1&ipt=69e6c3f91b7ba94c43d63a89aeb40bff31f537fe6ea59eb31955213871dc8c04",
        rating:3
    },

    {
        id:40,
        name:"ARUBA SFP Module J4858D",
        brand:"Aruba",
        category:"Networking",
        price:11500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fshop.itegy.com.eg%2Fwp-content%2Fuploads%2F2022%2F06%2FEG-Tech-Aruba-SFP-J4858D.jpg&f=1&nofb=1&ipt=9258282742ef2af7e7498c10b5846c21eb3ce57db250ba2274af3acad12325da",
        rating:4
    },

    {
        id:41,
        name:"Aruba SFP Module J4859D",
        brand:"Aruba",
        category:"Networking",
        price:11800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffirewallbazaar.in%2Fwp-content%2Fuploads%2F2023%2F06%2FAruba-1G-SFP-LC-LX-10km-SMF-XCVR-%25E2%2580%2593-J4859D.jpg&f=1&nofb=1&ipt=b40156b09ab37836628a987ea5eae09ca1a814b871a76b7b577df2ef9dd92fc9",
        rating:4
    },

    {
        id:42,
        name:"ATEN KVM Switch 4 Port",
        brand:"ATEN",
        category:"Accessories",
        price:8500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.aten.com%2Fproduct%2Fimage%2Fcs784h.kvm.desktop-kvm-switches.45.jpg&f=1&nofb=1&ipt=a43309bb14e9c3e4b762c9d1f109beca89e888ac3b7527979a621323d5013db9",
        rating:4
    },

    {
        id:43,
        name:"Beetel C51 Phones",
        brand:"Beetel",
        category:"Phones",
        price:1900,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F832%2F832%2Flandline-phone%2Fr%2Fj%2Fj%2Fbeetel-c-51-original-imaeagdrmrgpsh3z.jpeg%3Fq%3D70&f=1&nofb=1&ipt=7287eae53ee3314217c69422ad261978802d1b8cc1bd49152a9785e6b55f9388",
        rating:3
    },

    {
        id:44,
        name:"Beetel Phone M-25",
        brand:"Beetel",
        category:"Phones",
        price:2300,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2024%2F7%2F431725726%2FIG%2FDS%2FGZ%2F6111746%2Fbeetel-m25-corded-landline-phone-1000x1000.jpg&f=1&nofb=1&ipt=d37fa6f8c2dfdfa22422b24154d42ae7e3bc58f01c1d661af4f5c46d378ceec9",
        rating:3
    },

    {
        id:45,
        name:"Belden CAT 6 UTP Patch Chord 5M",
        brand:"Belden",
        category:"Networking",
        price:420,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finprocesa.com%2Fwp-content%2Fuploads%2F2024%2F03%2F15964_1710892378.jpg&f=1&nofb=1&ipt=5948d2f7c499da86b4061d4fb28e22ecd75c02b98c9b036ce3821e090359e92a",
        rating:4
    },

    {
        id:46,
        name:"Belden OS2 LC-LC Fiber Patch Chord 3Mtr",
        brand:"Belden",
        category:"Networking",
        price:850,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kenyagadgetshop.co.ke%2Fwp-content%2Fuploads%2F2024%2F02%2F3M-OS2-LC-LC-Fiber-Patch-Cable.jpg&f=1&nofb=1&ipt=2cba2a9978bbe3c77308fee2a753344ac144e84d5ee476931cd221016867a038",
        rating:4
    },

    {
        id:47,
        name:"Benq MW560N Projector",
        brand:"Benq",
        category:"Display",
        price:54000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2021%2F6%2FIU%2FYC%2FIP%2F4039318%2Fbenq-mw560-projector-1000x1000.jpg&f=1&nofb=1&ipt=36a66e8a1d6cecf59efb13a899fe9663f0da36ab0db9237675e2539712e6d176",
        rating:5
    },

    {
        id:48,
        name:"BNC Connector",
        brand:"Generic",
        category:"Accessories",
        price:75,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.I69o5_DkERQi5Athuzq2RQHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=8c359ab99fa5bb28c614445500ad0c21d901b97e22c50fa589eb70e8c701f3a5&ipo=images",
        rating:3
    },

    {
        id:49,
        name:"Brother Printer DCP-B7640DWB",
        brand:"Brother",
        category:"Printer",
        price:25000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2025%2F11%2F558019666%2FCT%2FOT%2FLP%2F10378422%2Fbrother-dcp-b7640dwb-multifunction-printer-1000x1000.png&f=1&nofb=1&ipt=d45016e94e2dea01b4dcb9db5cdbd0780e9f0369b6040c4ed5d5f5283e1968d1",
        rating:4
    },

    {
        id:50,
        name:"Brother Toner NTB021",
        brand:"Brother",
        category:"Printer",
        price:2800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2025%2F12%2F569954585%2FJQ%2FAY%2FHH%2F77142724%2Fbrother-tn-b021-toner-cartridge-for-use-hl-b2000d-b2080dw-dcp-b7500d-b75735dw-mfc-b7715dw-1000x1000.jpeg&f=1&nofb=1&ipt=a92acdd22c4e2b0dfefc36ed322fa97e2a4aa4d4abdf330db396ef150c1b1753",
        rating:4
    },

    {
        id:51,
        name:"Cable Manager 1U",
        brand:"Generic",
        category:"Accessories",
        price:700,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F715WGcfsIVL.jpg&f=1&nofb=1&ipt=a42dda12ffbcaa083514ad0d1ef337d579e21e3f3d226215d8c0a363e34533fa",
        rating:3
    },

    {
        id:52,
        name:"Cable Tie",
        brand:"Generic",
        category:"Accessories",
        price:40,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEi3sOGnyC0PDDwslBFJeiqnABY9469rNdg5eJ7ChpIl7tvl7-N_K3r8MkVz9p1hxQPQEGuIlbHGvfIfvUhpceLqijOit1bFXE-kPEizwhqCuvWPyRKA02Ey-4uvQKGmU6FlteIGthGX8OabnB0M-3Rrce699r8MEFtcjbQHKQyZx0SyqYkPh_ifSWDuiw%2Fs16000%2Fcable%2520tie.png&f=1&nofb=1&ipt=2ca4a009b4866ddafb1273527065bdddad3dee7bbafd2995098e29c3edebfddf",
        rating:3
    },

    {
        id:53,
        name:"CABLEWISE HDMI AOC Fiber Cable 4K 2.0 15M",
        brand:"Cablewise",
        category:"Cables",
        price:3650,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdvdo.com%2Fcdn%2Fshop%2Ffiles%2FDVDO-HDMIAOC1Picture4_8d25e699-fff6-4320-be67-2d4d1c1ba14b_800x.jpg%3Fv%3D1718918766&f=1&nofb=1&ipt=da659769847915f05bc4d0aed5d3d4ea3042b78d1b56e3c51a8636670fa55b91",
        rating:4
    },

    {
        id:54,
        name:"CABLEWISE HDMI AOC Fiber Cable 4K 2.0 20M",
        brand:"Cablewise",
        category:"Cables",
        price:4250,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.primuscable.com%2Fcdn%2Fshop%2Fproducts%2F181480-2.jpg%3Fv%3D1675377047%26width%3D1445&f=1&nofb=1&ipt=cc2e560c9c3a19cd669c7bc38822997290a1d12e04f974328c88d08f41d1de21",
        rating:4
    },

    {
        id:55,
        name:"CABLEWISE HDMI AOC Fiber Cable 4K 2.0 30M",
        brand:"Cablewise",
        category:"Cables",
        price:5000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bonestec.com%2Fwp-content%2Fuploads%2F2022%2F08%2F8K-HDMI-2.1-AOC-Fiber-Cable-1500-1024x1024.jpg&f=1&nofb=1&ipt=8d60afe0e9a2d0988f5ddf0b6d82bb93f7759232d181a0f27ef9aec6ede39ff3",
        rating:4
    },

    {
        id:56,
        name:"Cablewise HDMI PVC Cable 10.0mtr",
        brand:"Cablewise",
        category:"Cables",
        price:990,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F4%2F300269576%2FNB%2FRO%2FZO%2F9947620%2Fhdmi-cable-10-meter-500x500.jpg&f=1&nofb=1&ipt=76e9422be6c9910da34ad087287002f36622de74ac7f884afb596b6728376885",
        rating:3
    },

    {
        id:57,
        name:"Cantiliver Tray",
        brand:"Generic",
        category:"Accessories",
        price:950,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81LQPAeD5kL.jpg&f=1&nofb=1&ipt=6f7d19f91dee83630980c6afcf946d2e2e4f74f2fdc955ab00c38c9acbb5c601",
        rating:3
    },

    {
        id:58,
        name:"Casing",
        brand:"Generic",
        category:"Accessories",
        price:650,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lazcdn.com%2Fg%2Fp%2F567fd5236f69b24440ee9bfcdc530a97.png_720x720q80.png&f=1&nofb=1&ipt=efd45a2c4901a7d20606ebcf3f0a17fb7156b535ebb6a9cf72a1d1cb823e3f02",
        rating:3
    },

    {
        id:59,
        name:"CAT 6 LAN Cable",
        brand:"Generic",
        category:"Networking",
        price:210,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71Ft281bv-L._AC_.jpg&f=1&nofb=1&ipt=38513278b17dab1ad17e8da4c8f4c75d6d04f146fb0c3ece8c1f59e9ead9a673",
        rating:4
    },

    {
        id:60,
        name:"CCTV Box 5x5",
        brand:"Generic",
        category:"CCTV",
        price:350,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F12%2F365317947%2FTQ%2FJH%2FAG%2F86789048%2F5x5-cctv-junction-box-1000x1000.jpeg&f=1&nofb=1&ipt=3d907609feef7321b2444b88ac1ef27ad18dabe2828a6622f2bab7f381451b19",
        rating:3
    },

    {
        id:61,
        name:"CCTV Stand (Height expandable)",
        brand:"Generic",
        category:"CCTV",
        price:1200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.matryal.sa%2Fuploads%2Fgeneric_photos%2Fproduction%2F171%2F83%2F1.webp&f=1&nofb=1&ipt=3c76ae61b1b9bcc5afae6136553523a71b9bb07afe0e8021081c29810cc1f735",
        rating:3
    },

    {
        id:62,
        name:"Cisco C1300 24T 4G",
        brand:"Cisco",
        category:"Networking",
        price:29000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hi-network.com%2Fweb%2Fuploads%2Fimage%2F20240822%2F4M71123fCXM40tDIrHs7S30bxk2288Ak.webp&f=1&nofb=1&ipt=a2cca319c7a727113ca9ef39d05259811aa4aff8c13b0e342892be6e886b60d4",
        rating:5
    },

    {
        id:63,
        name:"CISCO C1300-24P-4G",
        brand:"Cisco",
        category:"Networking",
        price:36000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsupremenetworks.co.ke%2Fwp-content%2Fuploads%2F2025%2F04%2FCisco-Catalyst-1300-24P-4G-Managed-Switch-C1300-24P-4G.jpg&f=1&nofb=1&ipt=a97ce26a566f5dab1ed284f258e3d3c2d2709ec030300bef0a04a9a848c84782",
        rating:5
    },

    {
        id:64,
        name:"CISCO C1300-8P-E-2G",
        brand:"Cisco",
        category:"Networking",
        price:32000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.bechtle.com%2Fis%2F180712%2F1c4b3d4ee288fc9434f5175bf56070570%2Fc3%2Fgallery%2F6f86e5c479c84aabb2901416e591fd47%3Fversion%3D0%3Fx%3D3840%26quality%3D75&f=1&nofb=1&ipt=7b132fc3acd7b758c5bcab6c39636e270d737b564b92da822cab9e6584feac34",
        rating:5
    },

    {
        id:65,
        name:"CISCO C8200 DNA-P-T1-A-3Y",
        brand:"Cisco",
        category:"Networking",
        price:95000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cisco.com%2Fcontent%2Fdam%2Fcisco-cdc%2Fsite%2Fus%2Fen%2Fimages%2Fnetworking%2Fc8200-ucpe1n8-product-model-758x484.png&f=1&nofb=1&ipt=6437f5057be353c03bdb411725b05d83404104e18d9f4c28adcbbd7540a3954c",
        rating:5
    },

    {
        id:66,
        name:"CISCO C8200-1N-4T",
        brand:"Cisco",
        category:"Networking",
        price:78000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cisco.com%2Fcontent%2Fdam%2Fcisco-cdc%2Fsite%2Fus%2Fen%2Fimages%2Fnetworking%2Fc8200-1n4t-product-model-758x484.png.png&f=1&nofb=1&ipt=de981d8d198920a77c1b39fc28e1a5a9c164a7b6b280a935c06e54efe6a37da8",
        rating:5
    },

    {
        id:67,
        name:"CISCO C9115AXI-D Wireless Access Point",
        brand:"Cisco",
        category:"Wireless",
        price:32000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-z2d8eutrbc%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F16224%2F26211%2F1059507317__19515.1710817058.jpg%3Fc%3D1&f=1&nofb=1&ipt=2235940bfadd863fcfaf08617163437d37b2a22c26e2f14a7fe60ce8ce45eb54",
        rating:5
    },

    {
        id:68,
        name:"CISCO C9200L-DNA-E-48-3Y",
        brand:"Cisco",
        category:"Networking",
        price:88000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.adacomputers.com%2Fstorage%2Fimages%2Fproducts%2Flan-switch-cisco-catalyst-9200l-48p-4g-e-licenca-c9200l-dna-e-48-3y-large--1ab8072204e78c0af13558ed5266b510.webp&f=1&nofb=1&ipt=614093850e4f872946831d9a36b349fd56dde1575220ffab5ef9fdfbaf8aa184",
        rating:5
    },

    {
        id:69,
        name:"CISCO CON-SNT-C8200 3Y",
        brand:"Cisco",
        category:"Support",
        price:22000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fshoukinet.com%2Ffiles%2Fcisco-C8200L-1N-4T.jpg&f=1&nofb=1&ipt=480a0304243b8bf59a8437bf44a0880d1ff0cc68a89a68f675eb6d51f9fa9c82",
        rating:4
    },

    {
        id:70,
        name:"CISCO CON-SNT-C9200 48P 3 Y",
        brand:"Cisco",
        category:"Support",
        price:26000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.bhphoto.com%2Fimages%2Ffb%2F1750682.jpg&f=1&nofb=1&ipt=d93d7f3e2a4f2a08b9d73f9974245993836cfff0fd6942338f8931a5bfc838d7",
        rating:4
    },

    {
        id:71,
        name:"CISCO GLC-LH-SM SFP",
        brand:"Cisco",
        category:"Networking",
        price:4200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzhaoyongoptics.com%2Fwp-content%2Fuploads%2F2025%2F07%2FCisco-GLC-LH-SM-SFP-2.jpg&f=1&nofb=1&ipt=02d90df2ada25feba91a8df6b8e6e0806dd1daf353db9c45e1d2024354ada9b6",
        rating:4
    },

    {
        id:72,
        name:"CISCO GLC-T SFP",
        brand:"Cisco",
        category:"Networking",
        price:3800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfotecplus.com%2Fwp-content%2Fuploads%2F2024%2F07%2FGLC-T-1536x1536.jpg&f=1&nofb=1&ipt=e8baa4e5283c0b5003f78b476d14f00242ce96bd55d1c3de04cc0c0e8958639d",
        rating:4
    },

    {
        id:73,
        name:"CISCO Meraki LIC-ENT-1Y",
        brand:"Cisco",
        category:"License",
        price:12000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebobjects2.cdw.com%2Fis%2Fimage%2FCDW%2F3902986%3F%24product-main%24&f=1&nofb=1&ipt=075a6da8fc4fb52fe27b70512fe97ed04cef4bfd566e63e85372d55a452d6dd6",
        rating:4
    },

    {
        id:74,
        name:"CISCO Meraki LIC-MS225-24P-1YR",
        brand:"Cisco",
        category:"License",
        price:15000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.centralpoint.be%2Fobjects%2Fmultimedia%2F4%2F4be%2F1635659_102085238_netwerk-switches-cisco-ms225-24p-ms225-24p-hw.jpg&f=1&nofb=1&ipt=006739fca0568ae59473ed93c0a88b89340696e54e3bf69a19747ebdcda5e5c2",
        rating:4
    },

    {
        id:75,
        name:"CISCO MERAKI LIC-MX95-SEC-1Y",
        brand:"Cisco",
        category:"License",
        price:19000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-b9xom8%2Fproducts%2F159393%2Fimages%2F209458%2Fgeneric%25252520meraki%25252520license%25252520box__88340.1743632954.500.750.png%3Fc%3D2&f=1&nofb=1&ipt=6d502069786f89cacb60e7262ad0b1f24bf8db96858b77a4195efcf748d7babf",
        rating:4
    },

    {
        id:76,
        name:"CISCO Meraki LIC-MX95-SEC-3Y",
        brand:"Cisco",
        category:"License",
        price:42000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudappliances.co.uk%2Fuploads%2Fthumbnails%2Fproduct%2FCisco_LIC-MX95-SEC-3Y-565x398.webp&f=1&nofb=1&ipt=7c9674f7f676e35f85812c0c8914427aaba0f3c39150cc924388aedbf323f87d",
        rating:4
    },

    {
        id:77,
        name:"CISCO Meraki MR Enterprise License, 3YR",
        brand:"Cisco",
        category:"License",
        price:28000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.bhphoto.com%2Fimages%2Ffb%2F1563426.jpg&f=1&nofb=1&ipt=346e16f404fe575307b0328ec5c3c234042dbf0c9620c7895c89620a3ea193c1",
        rating:4
    },

    {
        id:78,
        name:"CISCO Meraki MR44 WiFi 6 Indoor AP",
        brand:"Cisco",
        category:"Wireless",
        price:35000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwiretap.com.au%2Fwp-content%2Fuploads%2F2020%2F06%2Fmr46-product-image-right-angle-shadow.png&f=1&nofb=1&ipt=bf11a0d5f42290e867880859ad6955e5c9f1e09c499922d28c6aacf92f731a2e",
        rating:5
    },

    {
        id:79,
        name:"CISCO Meraki MR46-HWC",
        brand:"Cisco",
        category:"Wireless",
        price:42000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FMeraki-MR46-Indoor-Wi-Fi-6-802-11ax-with-Multigigabit-Ethernet-and-Security-Radio-Access-Point-MR46-HW_dcdcd825-9185-488a-8975-9fd4a220162d.fbe13434b1c1fe38f6d76de3e6d6664f.jpeg&f=1&nofb=1&ipt=e37ec843dc7dee244d238ed09972c6333ee52540d533234f5a547d1e30c1fed9",
        rating:5
    },

    {
        id:80,
        name:"CISCO Meraki MS225-24P-HWC",
        brand:"Cisco",
        category:"Networking",
        price:47000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trifectanetworks.com%2Fwp-content%2Fuploads%2F2026%2F02%2FCisco-Meraki-MS225-24P-HW_01-scaled.png&f=1&nofb=1&ipt=bc19d1f09f2ffa4fcea8aa7940514d46995c19c0733a13e512d9094b5b496c48",
        rating:5
    },

    {
        id:81,
        name:"CISCO Meraki MX95-HWC",
        brand:"Cisco",
        category:"Networking",
        price:62000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmeraki.cisco.com%2Fwp-content%2Fuploads%2F2021%2F06%2FMX95-security-SD-WAN-appliance.png&f=1&nofb=1&ipt=f37ad8aca669e0829a7b44aad84a6e9e1c5a38a9a595e72699144c3f1bb62705",
        rating:5
    },

    {
        id:82,
        name:"CMOS Battery 2032",
        brand:"Generic",
        category:"Accessories",
        price:90,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.barclays.lk%2FmmBC%2FImages%2FBACS0003.jpg&f=1&nofb=1&ipt=510963710cc508d9f9fa916bc2b43e4c333dad117ab0a0805ee3e69fd73da1f1",
        rating:3
    },

    {
        id:83,
        name:"COMMSCOPE 6 CORE MULTI MODE FIBER CABLE OM3-2121106-3",
        brand:"Commscope",
        category:"Networking",
        price:7600,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.EjKFGgtxzxanCPlJRdPf1wHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=75d5d6d3aa611b1f0450870e76b501fbd3d916f7efaef4552a452d5072397ce2",
        rating:4
    },

    {
        id:84,
        name:"Commscope AMP 12 Port LIU Loaded",
        brand:"Commscope",
        category:"Networking",
        price:8500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechgurustore.in%2Fproduct-images%2F64.png%2F1282329000029122495%2F600x600&f=1&nofb=1&ipt=eb7c42e9092b00443a49b7ec58fd11b6adfe94adac5c5c8cb3eb02b2ba7fc3f8",
        rating:4
    },

    {
        id:85,
        name:"Commscope AMP 24 Port CAT 6.0 Loaded Patch Panel",
        brand:"Commscope",
        category:"Networking",
        price:15000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sieuthimaychu.vn%2Fdatafiles%2Fsetone%2F15610894925334.jpg&f=1&nofb=1&ipt=3d225b51ef2df9cda6d9896443753ef2d9933ceb3b4ad1a14dd1a47cb82334bf",
        rating:4
    },

    {
        id:86,
        name:"Commscope AMP 24AWG CAT6.0 305M Cable",
        brand:"Commscope",
        category:"Networking",
        price:6900,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.5t6H8EwMqzoq4HOil3tz4gHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=97426348005b6b6b3685c54785aafb6867e2f1e3e38039afc932a8e6fe6c5438",
        rating:4
    },

    {
        id:87,
        name:"Commscope AMP 48 Core SM Armoured Optical Fiber Cable",
        brand:"Commscope",
        category:"Networking",
        price:22500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2026%2F3%2F596019442%2FVF%2FXW%2FKH%2F70375240%2Fcommscope-single-mode-fiber-optic-cable-6-12-24-48-core-armoured-1000x1000.jpeg&f=1&nofb=1&ipt=5f64cc0d90cee26da8d7702b95504316ac8d6d678e788a63be99d6fb9a074809",
        rating:4
    },

    {
        id:88,
        name:"Commscope AMP 48 Port 2U Patch Panel",
        brand:"Commscope",
        category:"Networking",
        price:17000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-my.img.susercontent.com%2Ffile%2F694f00f4c53997f5ec0de8d41cbfe451&f=1&nofb=1&ipt=2f125acd657cfeaef43102a2badba7c420fba236f4b09036b620396be29de826",
        rating:4
    },

    {
        id:89,
        name:"Commscope AMP 6 Core Armored OM4 MM OFC Cable",
        brand:"Commscope",
        category:"Networking",
        price:12800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F9%2F345083796%2FVR%2FNB%2FMB%2F97705816%2Famp-fiber-optic-cable-armored-500x500.jpg&f=1&nofb=1&ipt=8631fa5dc008cf9ada3d996a36f9b3ea0f5943991af884c5a5dcd4fa50a56ed0",
        rating:4
    },

    {
        id:90,
        name:"Commscope AMP 6 Port LIU Loaded",
        brand:"Commscope",
        category:"Networking",
        price:7000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechgurustore.in%2Fproduct-images%2Ffms-6-lc-blue-1-jpg.jpg%2F1282329000028465492%2F1100x1100&f=1&nofb=1&ipt=f096892578e1559bd2cce8e79de235f96ce6bf1f3087887b08ba6caded0425b3",
        rating:4
    },

    {
        id:91,
        name:"Commscope AMP CAT 6.0 UTP Cable 305M ROLL",
        brand:"Commscope",
        category:"Networking",
        price:5600,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feg.jumia.is%2Funsafe%2Ffit-in%2F680x680%2Ffilters%3Afill(white)%2Fproduct%2F89%2F789891%2F1.jpg%3F0754&f=1&nofb=1&ipt=7d6c51eb9730c1255bfff91bc7a4e139dc2daa10e631c0f77ed513c802669bc1",
        rating:4
    },

    {
        id:92,
        name:"Commscope AMP CAT 6.0 UTP PATCH CHORD 1M",
        brand:"Commscope",
        category:"Networking",
        price:110,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-my.img.susercontent.com%2Ffile%2F87cee3619e77247b0f660814e895a33c&f=1&nofb=1&ipt=8e7497fd261c2583f86639b1c95818dda5a1c4fb4b8bf072317df3655c45fea4",
        rating:4
    },

    {
        id:93,
        name:"Commscope AMP CAT 6.0 UTP Patch Chord 2M Blue",
        brand:"Commscope",
        category:"Networking",
        price:150,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dayvienthong.com%2Fthumbs%2F1000x0x1%2Fupload%2Fproduct%2Fday-nhay-commscopeamp-cat6-2m-npc06uvdb-bl007f3-1-1769.jpg&f=1&nofb=1&ipt=13c81360e2080e84dc2e016d074d2189f406e3474e3007256160cc90cfd2b74d",
        rating:4
    },

    {
        id:94,
        name:"Commscope AMP CAT 6.0 UTP Patch Chord 3M",
        brand:"Commscope",
        category:"Networking",
        price:180,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvienthonggiatot.com%2Fupload%2Fimages%2Fday-nhay-commscope-1.jpg&f=1&nofb=1&ipt=8ae3ba8a876c4a788bfc6e8cd9849a8e75c3210bc38891c19c25e82da5fab911",
        rating:4
    },

    {
        id:95,
        name:"Commscope AMP CAT 6.0 UTP Patch Chord 5M",
        brand:"Commscope",
        category:"Networking",
        price:220,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbizweb.dktcdn.net%2F100%2F342%2F841%2Ffiles%2F4-05663b2a-3c30-47bd-ba89-839887906fe0.jpg%3Fv%3D1607661913044&f=1&nofb=1&ipt=6c4e0686d3a14aa56d99cc912f02ab5dde2373483017efa979fe06f01d7ebef1",
        rating:4
    },

    {
        id:96,
        name:"Commscope AMP CAT 6A Patch Chord 1M",
        brand:"Commscope",
        category:"Networking",
        price:260,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-id.img.susercontent.com%2Ffile%2Fid-11134207-7rasf-m3a8gkh7vlug70&f=1&nofb=1&ipt=636cb653708b668291186d6732bc9b9b9f3d0b4ef566d52adf30018d07eb742d",
        rating:4
    },

    {
        id:97,
        name:"Commscope AMP CAT 6A Patch Cord 3M",
        brand:"Commscope",
        category:"Networking",
        price:320,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flgnetperu.com%2Fwp-content%2Fuploads%2F2023%2F07%2FPatch-Cord-SFTP-3M-Cat-6A-CommScope-Azul.jpg&f=1&nofb=1&ipt=0f7c865ef616da8f05d9a41c9ffad8b22123e6bb3765edbeb7676b56f608f38f",
        rating:4
    },

    {
        id:98,
        name:"COMMSCOPE AMP CAT6 I/O",
        brand:"Commscope",
        category:"Networking",
        price:350,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F7%2F326095590%2FDA%2FWT%2FPH%2F8866058%2Fcommscope-cat6a-io-500x500.jpg&f=1&nofb=1&ipt=ade1ea58f0033b23417d0348971f02cd01f16cf9ac91927411799a57988637f5",
        rating:4
    },

    {
        id:99,
        name:"Commscope AMP CAT6A I/O",
        brand:"Commscope",
        category:"Networking",
        price:420,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2022%2F11%2FER%2FVT%2FMH%2F37844353%2Fcommscope-cat-6a-i-o-information-outlet-2153449-6-1000x1000.jpg&f=1&nofb=1&ipt=a9d6b5b104b0add54f8ef9e05b1f2bcbb949a8072467eaf4e33770a3e9274e93",
        rating:4
    },

    {
        id:100,
        name:"Commscope AMP CAT6A UTP Cable 305M Roll",
        brand:"Commscope",
        category:"Networking",
        price:6200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F1%2FZA%2FMY%2FYS%2F97705816%2Fcommscope-cat6a-cable-roll-500x500.jpg&f=1&nofb=1&ipt=9bbb27e705207a0e33476338c0d3c15d32dd40fdc1334138a43beff4588d7b61",
        rating:4
    },

    {
        id:101,
        name:"COMMSCOPE AMP CCA CONNECTORS",
        brand:"Commscope",
        category:"Accessories",
        price:180,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alldataresource.com%2Fassets%2Ffiles_commscope_new%2FCommScope-760250028-ECO-CCA-SHLD-5-Shielded-Ceiling-Connector-Assembly-Cca--1.jpg&f=1&nofb=1&ipt=9bad6025e58467b570e0397967eb99fa7063700e27e9516dcc7e7a8d53459d31",
        rating:3
    },

    {
        id:102,
        name:"Commscope AMP Face Plate Dual Port",
        brand:"Commscope",
        category:"Accessories",
        price:320,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wellent.com%2Folshop_data%2Fuser%2F72%2Fimages%2Fcrop%2F60_pac770410-8222-4cac-9c21-3cd927fd5d76.png.webp&f=1&nofb=1&ipt=cc86fae1cbf2de96057789c1542e9608417f1176fd93f6ae5013a50653aeda83",
        rating:4
    },

    {
        id:103,
        name:"Commscope AMP Face Plate Single Port",
        brand:"Commscope",
        category:"Accessories",
        price:220,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-id.img.susercontent.com%2Ffile%2Fid-11134201-7ra0p-mckr05xo4vcoe2&f=1&nofb=1&ipt=7b79d1242c6dfbd7cbfa3c815e0acc642e48b64cc3419ccd38ada37c162ced2b",
        rating:4
    },

    {
        id:104,
        name:"COMMSCOPE AMP OFC 6 CORE OM3",
        brand:"Commscope",
        category:"Networking",
        price:7200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.SZUeCezRRKL284nuacLh_AHaIi%3Fr%3D0%26pid%3DApi&f=1&ipt=21f41791d4c785664023505ae03f308546e91dc830bd7cfef1fcd59e577d20e3",
        rating:4
    },

    {
        id:105,
        name:"Commscope AMP Patch Panel Unloaded 24 Port",
        brand:"Commscope",
        category:"Networking",
        price:5600,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2022%2F11%2FPF%2FXJ%2FKE%2F6897194%2Fpatch-panel-commscope-amp-netconnect-500x500.webp&f=1&nofb=1&ipt=1a70a7ea6929e7c79d3a00b1528494de14ea8bfafd049b8e9055d3970a6cbfd2",
        rating:4
    },

    {
        id:106,
        name:"Commscope AMP Pigtail MM LC Type",
        brand:"Commscope",
        category:"Networking",
        price:240,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopticalsolutions.com.au%2Fwp-content%2Fuploads%2F2025%2F08%2F417104-fawlcuc0c-scaled.jpg&f=1&nofb=1&ipt=c0b970f4869d9624d9a3c068a6c676ea2387b1aaa4409d0994fc12eee09f31c0",
        rating:4
    },

    {
        id:107,
        name:"COMMSCOPE AMP RJ45 CONNECTOR",
        brand:"Commscope",
        category:"Accessories",
        price:80,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgratisongkir-storage.com%2Fproducts%2F900x900%2FJkg4OSWX8cYZ.jpg&f=1&nofb=1&ipt=dbe45fdacdcc8e9c8dd408fd2e12d375422a6b467eb58b8934ab602146500bd0",
        rating:4
    },

    {
        id:108,
        name:"Commscope CAT 6 I/O Universal",
        brand:"Commscope",
        category:"Networking",
        price:310,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2022%2F3%2FLU%2FPG%2FTD%2F1797571%2Fcommscope-cat-6-io-1000x1000.jpg&f=1&nofb=1&ipt=c526d0fe98ff09bcbf09e9fb80a1cd06626830bae95dbf5461b8948620b097e0",
        rating:4
    },

    {
        id:109,
        name:"Commscope Netconnect 1967320-2 RJ45 Jack Case for face plate",
        brand:"Commscope",
        category:"Accessories",
        price:250,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frgd.com.co%2Fwp-content%2Fuploads%2F2023%2F03%2F1375155-1.jpg&f=1&nofb=1&ipt=e44442c90dec152a179026204fc261750b69d65a13e838078ff6c50c30df9778",
        rating:4
    },

    {
        id:110,
        name:"Commscope RJ45 Connector",
        brand:"Commscope",
        category:"Accessories",
        price:90,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.rs-online.com%2Fimage%2Fupload%2Fbo_1.5px_solid_white%2Cb_auto%2Cc_pad%2Cdpr_2%2Cf_auto%2Ch_399%2Cq_auto%2Cw_710%2Fc_pad%2Ch_399%2Cw_710%2FR7825718-01%3Fpgw%3D1&f=1&nofb=1&ipt=a0a9cbb8cfa371fa0ab6ecfb78460df3599ce5047daccac0b85f7dbb1bbd1899",
        rating:4
    },

    {
        id:111,
        name:"Commscope Systimax 2 Port Shuttered Face Plate",
        brand:"Commscope",
        category:"Accessories",
        price:420,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fverbalbd.com%2Fwp-content%2Fuploads%2F914186-760200436-copy.jpg&f=1&nofb=1&ipt=1f560d91662eb79cf6f473d50259e2ff8d332427412ac48816aea88903326cfe",
        rating:4
    },

    {
        id:112,
        name:"Commscope Systimax 3x3 squire sing port face plate",
        brand:"Commscope",
        category:"Accessories",
        price:360,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-id.img.susercontent.com%2Ffile%2Fsg-11134201-7repi-m2mf6n3wtjhde4&f=1&nofb=1&ipt=1c3769b3a1f0d5fe622b804c4b372e6b76ef1ee11911a42fd662dcf65ed7fa30",
        rating:4
    },

    {
        id:113,
        name:"Commscope Systimax CAT 6 I/O",
        brand:"Commscope",
        category:"Networking",
        price:340,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2025%2F2%2F489755387%2FDX%2FMN%2FVT%2F85785065%2Fcommscope-systimax-cat6-i-o-1000x1000.jpg&f=1&nofb=1&ipt=4bd58a45c3d2420b119ce6a85c424965455af7f236c2efb2789d2770182699b2",
        rating:4
    },

    {
        id:114,
        name:"Commscope Systimax CAT 6 Patch Chord 2M",
        brand:"Commscope",
        category:"Networking",
        price:180,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F6%2F317239251%2FFZ%2FPF%2FMH%2F22795868%2Fsystimax-cat6-2-mtr-patch-cord-1000x1000.png&f=1&nofb=1&ipt=bd7effa9ae9d368de3d366a13750d99a93d13594cdbf437b35f6e6d72191907b",
        rating:4
    },

    {
        id:115,
        name:"Commscope systimax CAT 6.0 UTP Cable 305M Roll",
        brand:"Commscope",
        category:"Networking",
        price:6100,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2022%2F2%2FHO%2FMX%2FGE%2F145533111%2Fsystimax-utp-cat-6a-cable-1000x1000.jpg&f=1&nofb=1&ipt=a051c0a62b02a39aed931c133af39005c60862fcab8ea04877913fc7afd3cc27",
        rating:4
    },

    {
        id:116,
        name:"Consistant 512GB NVMe",
        brand:"Consistant",
        category:"Storage",
        price:4200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myorderstore.com%2Fimage%2Fcache%2Fcatalog%2FProducts%2FProducts%2Fconsistent%2520512mbnvmegen4-550x550h.png.webp&f=1&nofb=1&ipt=968416722ab313250240c96008cb0ef99bd25f6adb2da146a55fc7386a0505b0",
        rating:4
    },

    {
        id:117,
        name:"CONSOLE CABLE Usb Branded 1.8M",
        brand:"Generic",
        category:"Accessories",
        price:280,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71JTp9VVNWL._AC_.jpg&f=1&nofb=1&ipt=7b8947eb174cff65859b3b7713decc5758d238dd94fdee9a28df1a83ecc31296",
        rating:3
    },

    // {
    //     id:118,
    //     name:"CONSULTATION CHARGES - MISC",
    //     brand:"Generic",
    //     category:"Service",
    //     price:1500,
    //     stock:true,
    //     image:"img/products/servers.png",
    //     rating:3
    // },

    {
        id:119,
        name:"CP PLUS 16 PORT POE GIGA SWITCH",
        brand:"CP Plus",
        category:"Networking",
        price:24000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2026%2F2%2F582526302%2FFY%2FGX%2FBQ%2F262482503%2Fimage-1000x1000.jpeg&f=1&nofb=1&ipt=db0535f3b8c170395a4346bd684d7017ccf592bd1dea153c7135d3defb6fb264",
        rating:4
    },

    {
        id:120,
        name:"CP Plus 2.4MP Dome Camera CP-URC-DC24PL3-0360",
        brand:"CP Plus",
        category:"CCTV",
        price:3800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvlebazaar.in%2Fimage%2Fcache%2Fcatalog%2FCP-PLUS-24MP-Full-HD-IP-Indoor-Wired-Dome-Camera-CP-URC-DC24PL3-Compatib%2FCP-PLUS-24MP-Full-HD-IP-Indoor-Wired-Dome-Camera-CP-URC-DC24PL3-Compatible-with--1200x1200.jpg&f=1&nofb=1&ipt=b42b170506c8f7822fd6943a68f82278c0875b573855c2ba9028fcbdf2ada99f",
        rating:4
    },

    {
        id:121,
        name:"CP PLUS 2MP IP BULLET CAMERA",
        brand:"CP Plus",
        category:"CCTV",
        price:3300,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcctv.co.ke%2Fwp-content%2Fuploads%2F2024%2F03%2FCP-UNC-TA21PL3-0360.jpg&f=1&nofb=1&ipt=051cb6ffcccaa1826ea548ebe03d2cf2a0d78026148bd51db9fc5677d5aa29cd",
        rating:4
    },

    {
        id:122,
        name:"CP PLUS 2MP IP DOME CAMERA",
        brand:"CP Plus",
        category:"CCTV",
        price:3400,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51uXieQMSLL._SL1500_.jpg&f=1&nofb=1&ipt=a82a17cc241ba6965d128305fae1e6bf521d51508f0c70a2142bdad1906c8607",
        rating:4
    },

    {
        id:123,
        name:"CP Plus 32 Ch NVR",
        brand:"CP Plus",
        category:"CCTV",
        price:52000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F5%2F310626304%2FIO%2FZW%2FWJ%2F81314046%2Fcp-plus-32-channel-nvr-cp-unr-cp-unr-4k4322-v2-1000x1000.png&f=1&nofb=1&ipt=94451f2a843c53838527fddd3029734dc67bece0edd879717554c76d3e91e812",
        rating:4
    },

    {
        id:124,
        name:"CP Plus 4MP IP Bullet Camera",
        brand:"CP Plus",
        category:"CCTV",
        price:4200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffutureit.om%2Fwp-content%2Fuploads%2F2025%2F07%2FFIT-77.jpg&f=1&nofb=1&ipt=663b49bed3e855a2ef80a085e390f9751be2a33adf374fc9f06fcb259ae17b45",
        rating:4
    },

    {
        id:125,
        name:"CP PLUS 4MP IP Dome Camera",
        brand:"CP Plus",
        category:"CCTV",
        price:4600,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.uQzkp5yTFFqjm1FQ-B-dyQHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=23a55addb33eb8785ceb827c6be64b8c66e4ed82ce3054a9559c54ca72edaa42",
        rating:4
    },

    {
        id:126,
        name:"CP Plus 4MP IP Dome Camera CP-UNC-DA41PL3CC",
        brand:"CP Plus",
        category:"CCTV",
        price:4700,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthencix.com%2Fwp-content%2Fuploads%2F2025%2F11%2FCP-UNC-DA41L3C-D-LQ.jpg&f=1&nofb=1&ipt=95d75fa17f57a5cab3dea914e6bbeaea267b1448bb0763a62027ea596438fa5b",
        rating:4
    },

    {
        id:127,
        name:"CP Plus 8 CH NVR 2 SATA CP-UNR-4K4082-V4",
        brand:"CP Plus",
        category:"CCTV",
        price:28000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2024%2F8%2F447221369%2FZS%2FZE%2FVP%2F193372281%2Fcp-plus-8ch-2-sata-network-video-recorder-500x500.jpg&f=1&nofb=1&ipt=dd3435bad51e351e21a9fb77f6426756246e2be11f223043fe4635ca638a741a",
        rating:4
    },

    {
        id:128,
        name:"CP PLUS 8 CH NVR CP-UNR-108F1",
        brand:"CP Plus",
        category:"CCTV",
        price:22000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fradox.co.ke%2Fwp-content%2Fuploads%2F2024%2F09%2FCP-Plus-08-CH-NVR-3.jpg&f=1&nofb=1&ipt=df13587701bf4f15726ff8065c0c5fb86d0683f18db7fbece88b207a5f7cb49f",
        rating:4
    },

    {
        id:129,
        name:"CP Plus 8 Port PoE Switch CP-ANW-HPU8G2-N12",
        brand:"CP Plus",
        category:"Networking",
        price:16000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cpplus.si%2Fwp-content%2Fuploads%2F2025%2F11%2Fvyr_943_CP-ANW-HPU8G2-N12.jpg&f=1&nofb=1&ipt=04af37bf0ba3994df461ae765c7283c31e6c17aa4d19be38f1b96eb9a3e479ca",
        rating:4
    },

    {
        id:130,
        name:"CP Plus DVR 16Ch CP-UVR-1601E1-IC",
        brand:"CP Plus",
        category:"CCTV",
        price:18000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsrgroup.net.in%2Fwp-content%2Fuploads%2F2021%2F11%2FCP-16CH-F.jpg&f=1&nofb=1&ipt=68909ac4aacd7c491eb1886fd523554b7ef835aa0f09dfc2a3444626bd27aa81",
        rating:4
    },

    {
        id:131,
        name:"CP Plus IP Bullet Camera 2MP CP-UNC-TA21PL3-YC",
        brand:"CP Plus",
        category:"CCTV",
        price:3150,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2021%2F3%2FWV%2FNI%2FYP%2F23932509%2Fcp-plus-2mp-ip-bullet-camera-500x500.jpeg&f=1&nofb=1&ipt=c51af34767089d87d28350997c91dd188c6c5920fa4339478df27ab9091e9e84",
        rating:4
    },

    {
        id:132,
        name:"CyberPower UPS UT2200",
        brand:"CyberPower",
        category:"Power",
        price:26000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshopdelta.eu%2Fshop_image%2Fproduct%2Fut2200eg-fr_ups_d.jpg&f=1&nofb=1&ipt=0d1e8c889687a1dde5783012e51fd5a404f9eb164e1b2db87cb53692bb42faa6",
        rating:4
    },

    {
        id:133,
        name:"D-LINK 12U RACK",
        brand:"D-Link",
        category:"Rack",
        price:6800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-sp9oc95xrw%2Fimages%2Fstencil%2F608x608%2Fproducts%2F24477%2F80632%2Fdl16__75101.1716628583.png%3Fc%3D2&f=1&nofb=1&ipt=e677afded29dfc3699377bf07ba38c28d96928e671f2153be461403f966d352f",
        rating:4
    },

    {
        id:134,
        name:"D-Link 15U Rack",
        brand:"D-Link",
        category:"Rack",
        price:7500,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tunisianet.com.tn%2F419151-large%2Farmoire-d-link-15u600600mm-wall-mount-rack-with-glass-door.jpg&f=1&nofb=1&ipt=73b6044d3362430b43395bf7eb7f735d6d10661cc8f0ed55da9569d4173bc7ee",
        rating:4
    },

    {
        id:135,
        name:"D-Link 24 Port CAT 6 Patch Panel Loaded",
        brand:"D-Link",
        category:"Networking",
        price:7000,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F43%2F11%2Fd6%2F4311d6301741a6ae3f0dafbf48eac1f9.jpg&f=1&nofb=1&ipt=a0fd1139a59bf1f3e1d7d63f8686c424dd10354331bf76d0f6487a27663d0c05",
        rating:4
    },

    {
        id:136,
        name:"D-LINK 24 PORT PATCH PANEL UNLOADED",
        brand:"D-Link",
        category:"Networking",
        price:5200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmicroless.com%2Fcdn%2Fproducts%2Ff29aecc442d7dae9ebb4c659bec271d6-hi.jpg&f=1&nofb=1&ipt=c4c54c74747b7bd9ee5081368ad9c0dfcc7a77ba4ee27ef004e636bf7004cf40",
        rating:4
    },

    {
        id:137,
        name:"D-Link 4U Network Rack",
        brand:"D-Link",
        category:"Rack",
        price:6800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fits.dlink.co.in%2Fassets%2Fppic_1525874888.png&f=1&nofb=1&ipt=5c48542f74e9865fabfcfcabb71e1359106989d8979bdd90fc57d74c82b71d17",
        rating:4
    },

    {
        id:138,
        name:"D-Link 9U Rack",
        brand:"D-Link",
        category:"Rack",
        price:5200,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fits.dlink.co.in%2Fassets%2Fppic_1525874199.png&f=1&nofb=1&ipt=220f3d8dddbbd31872996d60dacb843228940223202f83503e8dc5a2e629d61d",
        rating:4
    },

    {
        id:139,
        name:"D-Link 9U Wall Mount Rack",
        brand:"D-Link",
        category:"Rack",
        price:4600,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.7r4AFL4KpEtBlrlhFBoQIAHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=edab7747d428fcb9db7edcba08623d4d5d933993e64e99665a00ab1f49e6b44a",
        rating:4
    },

    {
        id:140,
        name:"D-link Armored CAT 6 305 Mtr Roll",
        brand:"D-Link",
        category:"Networking",
        price:5900,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjo-cell.com%2Fcdn%2Fshop%2Ffiles%2FNCB-C6UGRYR-305-24-1-1200x1200.jpg%3Fv%3D1735799004%26width%3D1200&f=1&nofb=1&ipt=a739535dc93929e2db38697c42117bd11fd906aa69748bef843364c406369d6f",
        rating:4
    },

    {
        id:141,
        name:"D-Link CAT 5e Cable 305M Roll",
        brand:"D-Link",
        category:"Networking",
        price:4800,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.karousell.com%2Fmedia%2Fphotos%2Fproducts%2F2021%2F11%2F17%2Fdlink_cat_5e_utp_cable_305m_1637131740_43424503_progressive&f=1&nofb=1&ipt=e6f30a4569a3bb969bc1b2852f784435394a1e23d67ce032bdb4f445d44f2dd8",
        rating:4
    },

    {
        id:142,
        name:"D-LINK CAT 6 I/O",
        brand:"D-Link",
        category:"Networking",
        price:180,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F12%2F371183594%2FQC%2FPY%2FXR%2F33460485%2Fd-link-cat-6-i-o-keystone-500x500.jpg&f=1&nofb=1&ipt=3c13d33b09b7fd51dd728c37bbd7108f9885d6c1051c9ac45a9dc3607dc58fb2",
        rating:4
    },

    {
        id:143,
        name:"D-LINK CAT 6.0 CABLE 100Mtr ROLL",
        brand:"D-Link",
        category:"Networking",
        price:1900,
        stock:true,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2024%2F3%2F404830590%2FFF%2FIU%2FZS%2F30602128%2F100-m-d-link-cat-6-cable-1000x1000.jpg&f=1&nofb=1&ipt=25427ed9c36f1d6102cfd9eef7610e07482a394bd056315dd203eb32fdc97d9e",
        rating:4
    },

    {
        id:144,
        name:"D-LINK CAT 6.0 CABLE 305Mtr ROLL",
        brand:"D-Link",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:145,
        name:"D-Link CAT 6.0 Patch Cord 1 Mtr - Yellow",
        brand:"D-Link",
        category:"Networking",
        price:120,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:146,
        name:"D-Link CAT 6.0 UTP Patch Chord Blue 1 Mtr",
        brand:"D-Link",
        category:"Networking",
        price:130,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:147,
        name:"D-LINK CAT 6.0 UTP PATCH CHORD 1M",
        brand:"D-Link",
        category:"Networking",
        price:110,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:148,
        name:"D-Link CAT 6.0 UTP Patch chord 2M",
        brand:"D-Link",
        category:"Networking",
        price:150,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:149,
        name:"D-Link CAT 6.0 UTP Patch Chord 3M",
        brand:"D-Link",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:150,
        name:"D-Link CAT 6A Cable 305M Roll",
        brand:"D-Link",
        category:"Networking",
        price:6200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:151,
        name:"D-LINK CCTV Cable 3+1 90m Box",
        brand:"D-Link",
        category:"CCTV",
        price:900,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:152,
        name:"D-LINK DGS-1024D",
        brand:"D-Link",
        category:"Networking",
        price:13500,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:153,
        name:"D-Link DGS-1210-28P 24 port PoE Switch",
        brand:"D-Link",
        category:"Networking",
        price:31000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:154,
        name:"D-Link DGS-1210-28XS/ME Switch",
        brand:"D-Link",
        category:"Networking",
        price:32000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:155,
        name:"D-Link DGS-3130-30S 24SFP Switch",
        brand:"D-Link",
        category:"Networking",
        price:36000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:156,
        name:"D-Link Face Plate 1 Port",
        brand:"D-Link",
        category:"Accessories",
        price:150,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:157,
        name:"D-Link face plate dual port",
        brand:"D-Link",
        category:"Accessories",
        price:250,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:158,
        name:"D-Link Face Plate Quad Port",
        brand:"D-Link",
        category:"Accessories",
        price:420,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:159,
        name:"D-Link Face Plate single",
        brand:"D-Link",
        category:"Accessories",
        price:140,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:160,
        name:"D-Link Fiber Patch Cord",
        brand:"D-Link",
        category:"Networking",
        price:260,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:161,
        name:"D-Link LIU 12 Port Loaded",
        brand:"D-Link",
        category:"Networking",
        price:6200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:162,
        name:"D-Link LIU 24 Port Loaded",
        brand:"D-Link",
        category:"Networking",
        price:8200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:163,
        name:"D-Link LIU 48 Port Loaded",
        brand:"D-Link",
        category:"Networking",
        price:11500,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:164,
        name:"D-Link Liu 6 Port Loaded",
        brand:"D-Link",
        category:"Networking",
        price:3400,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:165,
        name:"D-LINK MEDIA CONVERTER 1000M SM DMC1000SC",
        brand:"D-Link",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:166,
        name:"D-LINK OFC 6 CORE MM OM2 ARMOURED",
        brand:"D-Link",
        category:"Networking",
        price:8900,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:167,
        name:"D-Link OFC Armored 6 Core SM",
        brand:"D-Link",
        category:"Networking",
        price:11200,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:168,
        name:"D-Link OFC Armoured OM3 6 Core",
        brand:"D-Link",
        category:"Networking",
        price:9800,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:169,
        name:"D-Link OFC Patch Chord LC-LC OM3",
        brand:"D-Link",
        category:"Networking",
        price:360,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:170,
        name:"D-Link OFC Patch Chord SM SC-LC",
        brand:"D-Link",
        category:"Networking",
        price:420,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:171,
        name:"D-Link Patch Panel CAT 6.0",
        brand:"D-Link",
        category:"Networking",
        price:4700,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:172,
        name:"D-Link Patch Panl Unloaded 24 Port",
        brand:"D-Link",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:173,
        name:"D-Link RJ45 Connector",
        brand:"D-Link",
        category:"Accessories",
        price:85,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:174,
        name:"D-Link SFP Module (Transceivers)",
        brand:"D-Link",
        category:"Networking",
        price:3100,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:175,
        name:"D-Link Switch DGS-1024C 24 Port unmanaged",
        brand:"D-Link",
        category:"Networking",
        price:21000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:176,
        name:"Dahua IP Camera Bullet HDW1230TL2",
        brand:"Dahua",
        category:"CCTV",
        price:4200,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:177,
        name:"Dahua IP Camera Dome HDW1230T2",
        brand:"Dahua",
        category:"CCTV",
        price:4500,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:178,
        name:"DC Connector",
        brand:"Generic",
        category:"Accessories",
        price:110,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:179,
        name:"DELL 20\" Monitor",
        brand:"Dell",
        category:"Monitor",
        price:12000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:180,
        name:"Dell AIO 24EC24250 (i5-1334U/8)",
        brand:"Dell",
        category:"Desktop",
        price:48000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:181,
        name:"Dell Desktop Pro QCT1250",
        brand:"Dell",
        category:"Desktop",
        price:52000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:182,
        name:"Dell Laptop",
        brand:"Dell",
        category:"Laptop",
        price:46000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:183,
        name:"Dell Laptop Latitude 3440",
        brand:"Dell",
        category:"Laptop",
        price:54000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:184,
        name:"Dell Laptop Latitude 3450-i5",
        brand:"Dell",
        category:"Laptop",
        price:62000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:185,
        name:"Dell Latitude 3450 i7 13th",
        brand:"Dell",
        category:"Laptop",
        price:76000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:186,
        name:"Dell Optiplex Desktop 3000MT",
        brand:"Dell",
        category:"Desktop",
        price:50000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:187,
        name:"Dell PowerEdge T160 Server",
        brand:"Dell",
        category:"Server",
        price:90000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:188,
        name:"Dell Precion Tower Workstation T3680",
        brand:"Dell",
        category:"Workstation",
        price:128000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:5
    },

    {
        id:189,
        name:"Dell Server PowerEdge R760XS",
        brand:"Dell",
        category:"Server",
        price:185000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:190,
        name:"Dell Vostro 3030 Desktop",
        brand:"Dell",
        category:"Desktop",
        price:47000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:191,
        name:"Dell Wireless Keyboard & Mouse Combo KM3322W",
        brand:"Dell",
        category:"Accessories",
        price:2600,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:192,
        name:"Dell Wireless Mouse",
        brand:"Dell",
        category:"Accessories",
        price:1200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:193,
        name:"DERWISER 2P BRITHIS STYLE SHUTTER FACE PLATE",
        brand:"Derwiser",
        category:"Accessories",
        price:240,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:194,
        name:"Derwiser Cat 6 Cable 305mtr Grey 23AWG",
        brand:"Derwiser",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:195,
        name:"DERWISER CAT 6 UTP INFORMATION OUTLET - UNIVERSAL",
        brand:"Derwiser",
        category:"Networking",
        price:250,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:196,
        name:"DERWISER CAT 6.0 INFORMATION OUTLET- GREEN",
        brand:"Derwiser",
        category:"Networking",
        price:280,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:197,
        name:"Desktop RAM 16GB DDR4",
        brand:"Generic",
        category:"Accessories",
        price:2600,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:198,
        name:"Desktop RAM 8GB DDR3",
        brand:"Generic",
        category:"Accessories",
        price:1800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:199,
        name:"Digisol CAT 6.0 Armored Cable 305M Roll",
        brand:"Digisol",
        category:"Networking",
        price:5400,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:200,
        name:"Digisol CAT 6.0 I/O",
        brand:"Digisol",
        category:"Networking",
        price:220,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:201,
        name:"Digisol CAT 6.0 Patch Panel 24 Port Loaded",
        brand:"Digisol",
        category:"Networking",
        price:5300,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:202,
        name:"Digisol CAT 6.0 Patch Panel 48 Port",
        brand:"Digisol",
        category:"Networking",
        price:7200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:203,
        name:"Digisol CAT 6.0 UTP Cable 305M Roll",
        brand:"Digisol",
        category:"Networking",
        price:4800,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:204,
        name:"Digisol CAT 6.0 UTP Patch Chord 1M",
        brand:"Digisol",
        category:"Networking",
        price:120,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:205,
        name:"Digisol CAT 6.0 UTP Patch Cord 2mtr",
        brand:"Digisol",
        category:"Networking",
        price:150,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:206,
        name:"DIGISOL CAT6 UTP CABLE 305 MTR ROLL (DGC-SC6U4F-3GB)",
        brand:"Digisol",
        category:"Networking",
        price:4500,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:207,
        name:"Digisol DG-GS1019PF-B",
        brand:"Digisol",
        category:"Networking",
        price:28000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:208,
        name:"Digisol DG-WM820AX",
        brand:"Digisol",
        category:"Wireless",
        price:2400,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:209,
        name:"Digisol Face Plate Dual Port",
        brand:"Digisol",
        category:"Accessories",
        price:200,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:210,
        name:"Digisol Face Plate Single Port",
        brand:"Digisol",
        category:"Accessories",
        price:150,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:211,
        name:"DIGISOL OFC PATCH CORD LC-LC OM2 3M DUPLEX",
        brand:"Digisol",
        category:"Networking",
        price:320,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:212,
        name:"Digisol XPON DG-GR6821AC",
        brand:"Digisol",
        category:"Networking",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:213,
        name:"DVR Rack 4U",
        brand:"Generic",
        category:"Rack",
        price:2100,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:214,
        name:"DYNAMIC 9U Wall mount (500mm)",
        brand:"Dynamic",
        category:"Rack",
        price:4200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:215,
        name:"Dynamic 12U Network Rack wall Mount 500mm",
        brand:"Dynamic",
        category:"Rack",
        price:5100,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:216,
        name:"DYNAMIC 15U Rack (500mm)",
        brand:"Dynamic",
        category:"Rack",
        price:6200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:217,
        name:"Dynamic 18U Rack 600x600mm Floor Standing",
        brand:"Dynamic",
        category:"Rack",
        price:7300,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:218,
        name:"Dynamic 1U PVC Cable Manager",
        brand:"Dynamic",
        category:"Accessories",
        price:450,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:219,
        name:"Dynamic 22U 600x600mm Rack",
        brand:"Dynamic",
        category:"Rack",
        price:8900,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:220,
        name:"Dynamic 24U 600x600mm Rack Floor Mount with Accessories",
        brand:"Dynamic",
        category:"Rack",
        price:9800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:221,
        name:"Dynamic 32U Rack 600x600mm",
        brand:"Dynamic",
        category:"Rack",
        price:11800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:222,
        name:"DYNAMIC 42U 600x1000 Rack",
        brand:"Dynamic",
        category:"Rack",
        price:16200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:223,
        name:"Dynamic 42U 600x600mm Rack",
        brand:"Dynamic",
        category:"Rack",
        price:14900,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:224,
        name:"DYNAMIC 4U NETWORK RACK 400MM WALL MOUNT",
        brand:"Dynamic",
        category:"Rack",
        price:3000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:225,
        name:"Dynamic 6U Wall Mount Rack",
        brand:"Dynamic",
        category:"Rack",
        price:3600,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:226,
        name:"Dynamic 9U Network Wall Mount Rack -500*500",
        brand:"Dynamic",
        category:"Rack",
        price:4300,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:227,
        name:"Dynamic 9U Rack Outdoor",
        brand:"Dynamic",
        category:"Rack",
        price:4600,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:228,
        name:"DYNAMIC 9U Wall Mount Rack (600mm) Folding",
        brand:"Dynamic",
        category:"Rack",
        price:4200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:229,
        name:"Dynamic ACD 12 Socket 5/15A",
        brand:"Dynamic",
        category:"Power",
        price:2200,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:230,
        name:"Dynamic ACD 6 Socket 5 Amp",
        brand:"Dynamic",
        category:"Power",
        price:1400,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:231,
        name:"DYNAMIC ACD 6 Socket Anchor 5/15A with MCB",
        brand:"Dynamic",
        category:"Power",
        price:1850,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:232,
        name:"Dynamic Cable Manager 1U",
        brand:"Dynamic",
        category:"Accessories",
        price:480,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:233,
        name:"DYNAMIC Cantiliver Tray",
        brand:"Dynamic",
        category:"Accessories",
        price:900,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:234,
        name:"Dynamic Heavy Duty Shelf for 600mm Rack",
        brand:"Dynamic",
        category:"Rack",
        price:1500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:235,
        name:"Dynamic rack Fan",
        brand:"Dynamic",
        category:"Accessories",
        price:600,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:236,
        name:"Dynamic Rack Hardware (Pack of 10 Nos)",
        brand:"Dynamic",
        category:"Accessories",
        price:420,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:237,
        name:"Dynamic Rack Hardware (Pack of 10 Nos.)",
        brand:"Dynamic",
        category:"Accessories",
        price:430,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:238,
        name:"Electrical cable 1Sqmm FRLS Armored",
        brand:"Generic",
        category:"Power",
        price:160,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:239,
        name:"EPSON PROJECTOR W49",
        brand:"Epson",
        category:"Display",
        price:42000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:5
    },

    {
        id:240,
        name:"Epson TM-U220 Dot Matrix Printer",
        brand:"Epson",
        category:"Printer",
        price:18000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:241,
        name:"ERD 8Ch Power Supply",
        brand:"ERD",
        category:"Power",
        price:1200,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:242,
        name:"ESSL ACCESS CONTROL ATTENDENCE Biomatrice",
        brand:"eSSL",
        category:"Access Control",
        price:6800,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:243,
        name:"eSSL Access Control Software",
        brand:"eSSL",
        category:"Software",
        price:5500,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:244,
        name:"eSSL AI Face Magnume",
        brand:"eSSL",
        category:"Biometric",
        price:18000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:245,
        name:"eSSL AI Face Mars Biomatric Device",
        brand:"eSSL",
        category:"Biometric",
        price:22500,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:246,
        name:"eSSL Biomatric Device K30 Pro",
        brand:"eSSL",
        category:"Biometric",
        price:19500,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:247,
        name:"eSSL C3-400 Controller",
        brand:"eSSL",
        category:"Access Control",
        price:12000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:248,
        name:"eSSL E-Time TrackLite",
        brand:"eSSL",
        category:"Software",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:249,
        name:"eSSL EM Lock",
        brand:"eSSL",
        category:"Access Control",
        price:3100,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:250,
        name:"eSSL EM Lock Double Leaf",
        brand:"eSSL",
        category:"Access Control",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:251,
        name:"eSSL KR500E Card Reader",
        brand:"eSSL",
        category:"Access Control",
        price:2400,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:252,
        name:"eSSL Push Button",
        brand:"eSSL",
        category:"Access Control",
        price:800,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:253,
        name:"eSSL U/L Bracket",
        brand:"eSSL",
        category:"Access Control",
        price:550,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:254,
        name:"eSSL x990 Biometric",
        brand:"eSSL",
        category:"Biometric",
        price:16000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:255,
        name:"Exide 12V 7Ah battery",
        brand:"Exide",
        category:"Power",
        price:700,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:256,
        name:"Exide Battery 26AH 12V",
        brand:"Exide",
        category:"Power",
        price:1800,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:257,
        name:"Finolex 12 core OM2 Armored OFC",
        brand:"Finolex",
        category:"Networking",
        price:6400,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:258,
        name:"Finolex 6 Core OM2 Armored OFC",
        brand:"Finolex",
        category:"Networking",
        price:4700,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:259,
        name:"FINOLEX RG-6 CU JELLY FILLEX CO-AXIAL CABLE 305M",
        brand:"Finolex",
        category:"Networking",
        price:3900,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:260,
        name:"Fluke Testing (Penta Testing)",
        brand:"Fluke",
        category:"Service",
        price:5200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:261,
        name:"Fluke Testing for Copper and Fiber",
        brand:"Fluke",
        category:"Service",
        price:6800,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:262,
        name:"Fortinet FC-10-F100F-950-02-12",
        brand:"Fortinet",
        category:"Firewall",
        price:22000,
        stock:true,
        image:"img/products/firewall.png",
        rating:5
    },

    {
        id:263,
        name:"Freight Charges",
        brand:"Generic",
        category:"Service",
        price:2500,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:264,
        name:"Grandstream GRP2624 4+4 lines, 4 SIP",
        brand:"Grandstream",
        category:"Telephony",
        price:21000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:265,
        name:"Grandstream GXW4216 16FXS, 1G",
        brand:"Grandstream",
        category:"Telephony",
        price:28000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:266,
        name:"Grandstream GXW4224 FXS 24 Port Gateway",
        brand:"Grandstream",
        category:"Telephony",
        price:34000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:267,
        name:"Grandstream GXW4248 48 FXS, 1 GigE",
        brand:"Grandstream",
        category:"Telephony",
        price:42000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:268,
        name:"Grandstream UCM6302A 2FXO, 2 FXS, 500",
        brand:"Grandstream",
        category:"Telephony",
        price:26000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:269,
        name:"Hardware Pkt.(Pack of 10Nos )",
        brand:"Generic",
        category:"Accessories",
        price:340,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:270,
        name:"HDMI Cable 10M",
        brand:"Generic",
        category:"Cables",
        price:520,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:271,
        name:"HDMI CABLE 8\"",
        brand:"Generic",
        category:"Cables",
        price:260,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:272,
        name:"HDMI Extender 60 Mtr",
        brand:"Generic",
        category:"Accessories",
        price:12000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:273,
        name:"HDMI VIDEO CAPTURE CARD",
        brand:"Generic",
        category:"Accessories",
        price:2500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:274,
        name:"Hewlett Packard Enterprise 1 x Intel DDR5 16GB",
        brand:"HPE",
        category:"Memory",
        price:7000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:275,
        name:"Hewlett Packard Enterprise 24 Ports Web Managed Non PoE Layer 2 Access Switch",
        brand:"HPE",
        category:"Networking",
        price:32000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:276,
        name:"Hikvision 16Ch NVR",
        brand:"Hikvision",
        category:"CCTV",
        price:18000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:277,
        name:"HIKVISION 2MP BULLET CAMERA",
        brand:"Hikvision",
        category:"CCTV",
        price:2100,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:278,
        name:"Hikvision 32Ch NVR DS-7732NXI-K4",
        brand:"Hikvision",
        category:"CCTV",
        price:42000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:279,
        name:"HIKVISION 4MP DOME CAMERA",
        brand:"Hikvision",
        category:"CCTV",
        price:3200,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:280,
        name:"Hikvision 4MP IP Bullet Camera DS-2CD1041G0-I",
        brand:"Hikvision",
        category:"CCTV",
        price:3000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:281,
        name:"Hikvision 4MP IP Dome Camera ) DS-2CD1341G0-I",
        brand:"Hikvision",
        category:"CCTV",
        price:3400,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:282,
        name:"Hikvision 64Ch NVR 7764NI -M4",
        brand:"Hikvision",
        category:"CCTV",
        price:58000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:283,
        name:"Honeywell 32ch. NVR with 4 SATA Ports (I-HIPNVR 432)",
        brand:"Honeywell",
        category:"CCTV",
        price:28000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:284,
        name:"Honeywell 5MP Bullet IP Camera Model No. :- I-HIPB5PI-MV",
        brand:"Honeywell",
        category:"CCTV",
        price:3600,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:285,
        name:"Honeywell 5MP Dome IP Camera Model No. :- I-HIPD5PI-MV",
        brand:"Honeywell",
        category:"CCTV",
        price:3900,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:286,
        name:"HP 240G10 ALL IN ONE DESKTOP",
        brand:"HP",
        category:"Desktop",
        price:42000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:287,
        name:"HP AIO 24-CB1901IN",
        brand:"HP",
        category:"Desktop",
        price:46000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:288,
        name:"HP AIO 27-CR1009IN",
        brand:"HP",
        category:"Desktop",
        price:52000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:289,
        name:"HP AIO 27-CR1418in",
        brand:"HP",
        category:"Desktop",
        price:61000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:290,
        name:"HP Business NB Elitebook x360 830",
        brand:"HP",
        category:"Laptop",
        price:72000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:291,
        name:"HP Cartridge CF256X",
        brand:"HP",
        category:"Printer",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:292,
        name:"HP Color LaserJet Pro Printer 3203DW",
        brand:"HP",
        category:"Printer",
        price:36000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:293,
        name:"HP Desktop 280 G9",
        brand:"HP",
        category:"Desktop",
        price:47000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:294,
        name:"HP Envy X360 15-fe0014TX",
        brand:"HP",
        category:"Laptop",
        price:68000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:295,
        name:"HP Headphone 3.5mm Jack B4B09PA",
        brand:"HP",
        category:"Accessories",
        price:1700,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:296,
        name:"HP Laptop 240G9 i3 12th Gen",
        brand:"HP",
        category:"Laptop",
        price:52000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:297,
        name:"HP LaserJet Enterprise M507dn Printer",
        brand:"HP",
        category:"Printer",
        price:27000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:298,
        name:"HP LaserJet M208 DW Printer",
        brand:"HP",
        category:"Printer",
        price:22000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:299,
        name:"HP LaserJet P1108 Printer",
        brand:"HP",
        category:"Printer",
        price:18000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:300,
        name:"HP LaserJet Pro 126A Printer",
        brand:"HP",
        category:"Printer",
        price:16000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:301,
        name:"HP LaserJet Pro 126NW Printer",
        brand:"HP",
        category:"Printer",
        price:17000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:302,
        name:"HP Laserjet Pro MFP M329DW Printer",
        brand:"HP",
        category:"Printer",
        price:27000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:303,
        name:"HP LASERJET TONER 88-A",
        brand:"HP",
        category:"Printer",
        price:1900,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:304,
        name:"HP LaserMFP 323sdnw",
        brand:"HP",
        category:"Printer",
        price:30000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:305,
        name:"HP LasserJet MFP 1188w Printer",
        brand:"HP",
        category:"Printer",
        price:25000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:306,
        name:"HP Monitor 24\" 324pv",
        brand:"HP",
        category:"Monitor",
        price:9500,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:307,
        name:"HP OmniBook 5 Laptop 16-ba1124TU",
        brand:"HP",
        category:"Laptop",
        price:78000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:308,
        name:"HP Printer All in One 329DW",
        brand:"HP",
        category:"Printer",
        price:21000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:309,
        name:"HP Printer MFP 126A",
        brand:"HP",
        category:"Printer",
        price:19000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:310,
        name:"HP Renew Business 14.1 Laptop Bag",
        brand:"HP",
        category:"Accessories",
        price:1200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:311,
        name:"HPE 2.4TB SAS 10K SFF BC 512e MV HDD - P28352-K21",
        brand:"HPE",
        category:"Storage",
        price:15000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:312,
        name:"HPE 32GB DDR4 2666MHz RAM P.NP.:- 840758-091",
        brand:"HPE",
        category:"Memory",
        price:6000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:313,
        name:"HPE 64GB 2RX4 PC4-3200 RAM P.No. P06035-B21",
        brand:"HPE",
        category:"Memory",
        price:9500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:314,
        name:"HPE Adapter BCM 5719 1GB 4P Base-T",
        brand:"HPE",
        category:"Networking",
        price:3400,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:315,
        name:"HPE Aruba 2930F 24G 4SFP+ Switch JL253A",
        brand:"HPE",
        category:"Networking",
        price:41000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:316,
        name:"HPE DL360 Gen10 Server",
        brand:"HPE",
        category:"Server",
        price:145000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:317,
        name:"HPE DL380 G11 4410Y MR408i-o NC 8SFF Svr (P52560-B21)",
        brand:"HPE",
        category:"Server",
        price:210000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:318,
        name:"HPE DL380 Gen10 Server",
        brand:"HPE",
        category:"Server",
        price:170000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:319,
        name:"HPE DL380 Gen11 Part No. P52560-B21",
        brand:"HPE",
        category:"Server",
        price:215000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:320,
        name:"HPE DL385 G10+ V2 8SFF CTO SVR PWR P.NP.-P38411-B21",
        brand:"HPE",
        category:"Server",
        price:190000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:321,
        name:"HPE ML30 GEN11 4u RPS Enable Kit P.No. : P65104-B21",
        brand:"HPE",
        category:"Server",
        price:7800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:322,
        name:"Hynix RAM 8GB DDR5",
        brand:"Hynix",
        category:"Memory",
        price:2600,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:323,
        name:"Installation & Termination of CAT 6 I/O",
        brand:"Generic",
        category:"Service",
        price:3000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:324,
        name:"Installation - Floor Cutting for Raceway Installation",
        brand:"Generic",
        category:"Service",
        price:3500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:325,
        name:"Installation Charges",
        brand:"Generic",
        category:"Service",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:326,
        name:"Installation Charges & Configuration",
        brand:"Generic",
        category:"Service",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:327,
        name:"Installation Charges - Misc",
        brand:"Generic",
        category:"Service",
        price:1800,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:328,
        name:"Installation Charges - Patch Cord",
        brand:"Generic",
        category:"Service",
        price:1200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:329,
        name:"Installation Charges of 12U Rack",
        brand:"Generic",
        category:"Service",
        price:1800,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:330,
        name:"Installation of 25mm PVC Conduit",
        brand:"Generic",
        category:"Service",
        price:1600,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:331,
        name:"Installation of Access Points",
        brand:"Generic",
        category:"Service",
        price:1500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:332,
        name:"Installation of Cameras",
        brand:"Generic",
        category:"Service",
        price:1500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:333,
        name:"Installation of LIU",
        brand:"Generic",
        category:"Service",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:334,
        name:"Installation of Network Switches",
        brand:"Generic",
        category:"Service",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:335,
        name:"Installation of NVR",
        brand:"Generic",
        category:"Service",
        price:2000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:336,
        name:"Installation of Patch Panel",
        brand:"Generic",
        category:"Service",
        price:2000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:337,
        name:"Installation of PVC Conduit",
        brand:"Generic",
        category:"Service",
        price:1400,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:338,
        name:"installation of PVC Gang Box",
        brand:"Generic",
        category:"Service",
        price:900,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:339,
        name:"Installation of Raceway",
        brand:"Generic",
        category:"Service",
        price:2600,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:340,
        name:"Installation of Wall mount network racks",
        brand:"Generic",
        category:"Service",
        price:1500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:341,
        name:"Intex 1KVA UPS",
        brand:"Intex",
        category:"Power",
        price:8200,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:342,
        name:"Intex 600VA UPS",
        brand:"Intex",
        category:"Power",
        price:5200,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:343,
        name:"Jabra Evolve 2.0 SE USB UC Sterio",
        brand:"Jabra",
        category:"Accessories",
        price:6200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:344,
        name:"Jumper Wire 200mtr Roll",
        brand:"Generic",
        category:"Accessories",
        price:350,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:345,
        name:"Kingston DTX 128GB Pen Drive",
        brand:"Kingston",
        category:"Storage",
        price:1800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:346,
        name:"Kingston DTX50 128GB Pen Drive",
        brand:"Kingston",
        category:"Storage",
        price:1700,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:347,
        name:"Kingston DTX64GB USB Pen Drive",
        brand:"Kingston",
        category:"Storage",
        price:900,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:348,
        name:"Krone Box 50 Pair",
        brand:"Krone",
        category:"Accessories",
        price:3000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:349,
        name:"Lapcare Cartridge Compitable",
        brand:"Lapcare",
        category:"Printer",
        price:900,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:350,
        name:"Laptop Bag",
        brand:"Generic",
        category:"Accessories",
        price:1400,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:351,
        name:"Laptop Charger",
        brand:"Generic",
        category:"Accessories",
        price:1700,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:352,
        name:"Laying of 2 Pair Telephone Cable",
        brand:"Generic",
        category:"Service",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:353,
        name:"Laying of CAT 6.0 Cable",
        brand:"Generic",
        category:"Service",
        price:2600,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:354,
        name:"Laying of OFC Cable",
        brand:"Generic",
        category:"Service",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:355,
        name:"Lenovo AIO Desktop F0J6005GIN",
        brand:"Lenovo",
        category:"Desktop",
        price:51000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:356,
        name:"Lenovo BackPack",
        brand:"Lenovo",
        category:"Accessories",
        price:1800,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:357,
        name:"Lenovo Desktop IdeaCentre Tower 08IRR9",
        brand:"Lenovo",
        category:"Desktop",
        price:53000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:358,
        name:"Lenovo IdeaPad Slim 3 Laptop",
        brand:"Lenovo",
        category:"Laptop",
        price:55000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:359,
        name:"Lenovo LED 24\"",
        brand:"Lenovo",
        category:"Monitor",
        price:9500,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:360,
        name:"Lenovo Monitor 19.5\"",
        brand:"Lenovo",
        category:"Monitor",
        price:7000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:361,
        name:"Lenovo Tab M11",
        brand:"Lenovo",
        category:"Tablet",
        price:18000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:362,
        name:"Lenovo Thinkbook 14 G6 IRL 21KGA08HIN",
        brand:"Lenovo",
        category:"Laptop",
        price:62000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:363,
        name:"Lenovo Thinkcenter Neo 50S",
        brand:"Lenovo",
        category:"Desktop",
        price:48000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:364,
        name:"Lenovo ThinkCentre AIO Neo 50a",
        brand:"Lenovo",
        category:"Desktop",
        price:54000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:365,
        name:"LENOVO THINKPAD L15 I5",
        brand:"Lenovo",
        category:"Laptop",
        price:73000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:366,
        name:"Lenovo Warranty Protection Pack 3Yrs",
        brand:"Lenovo",
        category:"Service",
        price:5500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:367,
        name:"LG 32\" Monitor LG 32MR50C",
        brand:"LG",
        category:"Monitor",
        price:13000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:368,
        name:"LG Display Monitor 43\"",
        brand:"LG",
        category:"Monitor",
        price:22000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:369,
        name:"LIU Fiber Patch Panel Loaded 1U, 12 Ports LIU",
        brand:"Generic",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:370,
        name:"Logitech Head Phone H340 USB",
        brand:"Logitech",
        category:"Accessories",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:371,
        name:"Luminous 10 Kva Online Ups LD-10000 T",
        brand:"Luminous",
        category:"Power",
        price:48000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:372,
        name:"Matrix Digital Phone Model No. EON 510",
        brand:"Matrix",
        category:"Telephony",
        price:4500,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:373,
        name:"Matrix PRI Card",
        brand:"Matrix",
        category:"Telephony",
        price:7200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:374,
        name:"Mercusys 8 Port 10/100 Desktop Switch",
        brand:"Mercusys",
        category:"Networking",
        price:2400,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:375,
        name:"Microtek 15KVA UPS Online",
        brand:"Microtek",
        category:"Power",
        price:52000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:376,
        name:"Microtek UPS 1000VA",
        brand:"Microtek",
        category:"Power",
        price:5600,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:377,
        name:"Mobile Signal Booster Commercial",
        brand:"Generic",
        category:"Wireless",
        price:19000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:378,
        name:"N S - D-Link Cat-6 UTP Patch Cable 10Mtr",
        brand:"D-Link",
        category:"Networking",
        price:250,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:379,
        name:"N S - Fiber Jounter Box",
        brand:"Generic",
        category:"Accessories",
        price:750,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:3
    },

    {
        id:380,
        name:"N S - SENNHEISER PC7 USB HEADPHONE",
        brand:"Sennheiser",
        category:"Accessories",
        price:3400,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:381,
        name:"N S- CAT 6.0 CABLE",
        brand:"Generic",
        category:"Networking",
        price:2800,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:382,
        name:"N S- D-Link Cat-6 UTP Patch Cable 15Mtr",
        brand:"D-Link",
        category:"Networking",
        price:320,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:383,
        name:"N S- D-Link Cat-6 UTP Patch Cable 5Mtr",
        brand:"D-Link",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:384,
        name:"N S- D-Link RJ45 Connector",
        brand:"D-Link",
        category:"Accessories",
        price:90,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:385,
        name:"N S- I/O BOX with Face Plate",
        brand:"Generic",
        category:"Accessories",
        price:280,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:386,
        name:"N S- PVC Conduit 25mm",
        brand:"Generic",
        category:"Accessories",
        price:150,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:387,
        name:"N S-Fiber Pigtail",
        brand:"Generic",
        category:"Networking",
        price:220,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:388,
        name:"National 1.0 Sqmm 2 Core Copper Flexible 90M Bundle",
        brand:"National",
        category:"Power",
        price:4300,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:389,
        name:"National 1.0 Sqmm 4 Core Copper Flexible 90M Bundle",
        brand:"National",
        category:"Power",
        price:5200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:390,
        name:"Netrack 15U Wall Mount Rack",
        brand:"Netrack",
        category:"Rack",
        price:6500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:391,
        name:"Netrack 17U Floor Standing Rack",
        brand:"Netrack",
        category:"Rack",
        price:8200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:392,
        name:"nVIDIA Quadro PNY RTX2000 ADA 16GB",
        brand:"NVIDIA",
        category:"Graphics",
        price:42000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:393,
        name:"OFC PATCH CHORD SC-LC SM 10M",
        brand:"Generic",
        category:"Networking",
        price:520,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:394,
        name:"Outstation Charges",
        brand:"Generic",
        category:"Service",
        price:3000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:395,
        name:"Palo Alto Networks PA-440 Firewall",
        brand:"Palo Alto",
        category:"Firewall",
        price:95000,
        stock:true,
        image:"img/products/firewall.png",
        rating:5
    },

    {
        id:396,
        name:"Palo Alto PAN-PA-440-ATP-3YR",
        brand:"Palo Alto",
        category:"Security",
        price:36000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:397,
        name:"Palo Alto PAN-PA-440-AWF-3YR",
        brand:"Palo Alto",
        category:"Security",
        price:34000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:398,
        name:"Palo Alto PAN-PWR-50W-AC",
        brand:"Palo Alto",
        category:"Power",
        price:1600,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:399,
        name:"Palo Alto PAN-SVC-BKLN-440-3YR SUPPORT",
        brand:"Palo Alto",
        category:"Support",
        price:18000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:400,
        name:"PDU 15A 6 SOCKET 1U",
        brand:"Generic",
        category:"Power",
        price:700,
        stock:true,
        image:"img/products/firewall.png",
        rating:3
    },

    {
        id:401,
        name:"Polycab 1.5sqmm 2 core Armoured Cable - Red",
        brand:"Polycab",
        category:"Power",
        price:280,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:402,
        name:"Polycab 2 Core Copper Flexible 90M Bundle",
        brand:"Polycab",
        category:"Power",
        price:4500,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:403,
        name:"Polycab 4 Core Copper Flexible 90M Bundle",
        brand:"Polycab",
        category:"Power",
        price:6200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:404,
        name:"Polycab CAT 6 UTP Cable 305M roll",
        brand:"Polycab",
        category:"Networking",
        price:4000,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:405,
        name:"Prama 32Ch NVR with 4 SATA Port",
        brand:"Prama",
        category:"CCTV",
        price:22000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:406,
        name:"PRAMA 4MP IP BULLET CAMERA 30MTR IR",
        brand:"Prama",
        category:"CCTV",
        price:2600,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:407,
        name:"PRAMA 4MP IP DOME CAMERA 30MTR IR",
        brand:"Prama",
        category:"CCTV",
        price:2800,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:408,
        name:"PVC Batton",
        brand:"Generic",
        category:"Accessories",
        price:120,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:409,
        name:"PVC Conduit 25mm",
        brand:"Generic",
        category:"Accessories",
        price:140,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:410,
        name:"PVC Gang Box",
        brand:"Generic",
        category:"Accessories",
        price:180,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:411,
        name:"Quick Heal Antivirus Pro",
        brand:"Quick Heal",
        category:"Software",
        price:1200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:412,
        name:"R&M CAT6 Armoured Cable 305M Roll",
        brand:"R&M",
        category:"Networking",
        price:5200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:413,
        name:"R&M CAT 6 I/O Patch Panel End",
        brand:"R&M",
        category:"Networking",
        price:340,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:414,
        name:"R&M CAT 6 I/O User End",
        brand:"R&M",
        category:"Networking",
        price:320,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:415,
        name:"R&M CAT 6 U/UTP Cable 4P PVC 305M",
        brand:"R&M",
        category:"Networking",
        price:4300,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:416,
        name:"R&M CAT 6A I/O",
        brand:"R&M",
        category:"Networking",
        price:390,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:417,
        name:"R&M CAT 6A Patch Chord 1M",
        brand:"R&M",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:418,
        name:"R&M CAT 6A Patch Chord 2M",
        brand:"R&M",
        category:"Networking",
        price:220,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:419,
        name:"R&M CAT6 24 Port Unloaded Patch Panel",
        brand:"R&M",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:420,
        name:"R&M Faceplate 2 Port",
        brand:"R&M",
        category:"Accessories",
        price:240,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:421,
        name:"R&M LIU 12 Port Loaded",
        brand:"R&M",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:422,
        name:"R&M LIU 24 Port Loaded",
        brand:"R&M",
        category:"Networking",
        price:7600,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:423,
        name:"R&M OFC Patch Chord 3M SC-LC Duplex",
        brand:"R&M",
        category:"Networking",
        price:420,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:424,
        name:"RACK & links",
        brand:"Generic",
        category:"Accessories",
        price:350,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:425,
        name:"Rack Hardware (Packet of 20nos. ) Tata Trynox",
        brand:"Tata Trynox",
        category:"Accessories",
        price:410,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:426,
        name:"Raised Flooring",
        brand:"Generic",
        category:"Accessories",
        price:1500,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:427,
        name:"RAM 8GB DDR5 DESKTOP",
        brand:"Generic",
        category:"Memory",
        price:2600,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:428,
        name:"Ravtron Hdmi cable 3Mtr",
        brand:"Ravtron",
        category:"Cables",
        price:300,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:429,
        name:"Ravtron HDMI to HDMI Cable 5M",
        brand:"Ravtron",
        category:"Cables",
        price:420,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:430,
        name:"Refurbished Laptop",
        brand:"Generic",
        category:"Laptop",
        price:32000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:431,
        name:"Rental Service - Core i5/ 16GB/ 240 GB SSD",
        brand:"Generic",
        category:"Service",
        price:9800,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:432,
        name:"Rental Service - Laptop",
        brand:"Generic",
        category:"Service",
        price:8200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:433,
        name:"Rental Services Core i3 / 8GB/ 120GB SSD, Dual Monitor",
        brand:"Generic",
        category:"Service",
        price:7600,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:434,
        name:"Resident Engineer Support Services",
        brand:"Generic",
        category:"Service",
        price:15000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:435,
        name:"RJ45 Connector for Cat6 Cable",
        brand:"Generic",
        category:"Accessories",
        price:55,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:436,
        name:"Ruijie RG-ES209GC-P",
        brand:"Ruijie",
        category:"Networking",
        price:2600,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:437,
        name:"RUIJIE RG-RAP2200E Access Point",
        brand:"Ruijie",
        category:"Wireless",
        price:11000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:438,
        name:"RUIJIE RG-RAP2260(G)",
        brand:"Ruijie",
        category:"Wireless",
        price:14000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:439,
        name:"RUIJIE RG-RAP2266 Access Point",
        brand:"Ruijie",
        category:"Wireless",
        price:16000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:440,
        name:"RUIJIE RG-RAP2266 AX3000S",
        brand:"Ruijie",
        category:"Wireless",
        price:17000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:441,
        name:"CAMC Charges",
        brand:"Generic",
        category:"Service",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:442,
        name:"Fiber Cable",
        brand:"Generic",
        category:"Networking",
        price:1200,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:443,
        name:"Laying of CAT 6.0 Cable",
        brand:"Generic",
        category:"Service",
        price:8500,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:444,
        name:"Laying of Fiber Cable",
        brand:"Generic",
        category:"Service",
        price:9500,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:445,
        name:"Rack Installation Charges",
        brand:"Generic",
        category:"Service",
        price:7000,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:446,
        name:"Termination of I/O both end",
        brand:"Generic",
        category:"Service",
        price:6500,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:447,
        name:"TV Cabinet",
        brand:"Generic",
        category:"Accessories",
        price:1500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:448,
        name:"Preparation & Splicing of Fiber Cores",
        brand:"Generic",
        category:"Service",
        price:11000,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:449,
        name:"SAMSUNG 16 GB DDR5 RAM",
        brand:"Samsung",
        category:"Memory",
        price:6800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:450,
        name:"Samsung 16GB DDR4 RAM Desktop",
        brand:"Samsung",
        category:"Memory",
        price:6200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:451,
        name:"SEGATE 10TB ONETOUCH EXTERNAL HDD",
        brand:"Seagate",
        category:"Storage",
        price:9800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:452,
        name:"Segate 16TB HDD",
        brand:"Seagate",
        category:"Storage",
        price:13500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:453,
        name:"Segate 8TB HDD SATA",
        brand:"Seagate",
        category:"Storage",
        price:8200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:454,
        name:"Seqrite End Point Protection 10 User Pack 1 Yr",
        brand:"Seqrite",
        category:"Software",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:455,
        name:"SFP Module",
        brand:"Generic",
        category:"Networking",
        price:2600,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:456,
        name:"Simmtronics 16GB DDR4 RAM - Desktop",
        brand:"Simmtronics",
        category:"Memory",
        price:5900,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:457,
        name:"SIT Maintenance",
        brand:"Generic",
        category:"Service",
        price:10000,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:458,
        name:"Software License",
        brand:"Generic",
        category:"Software",
        price:3500,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:459,
        name:"SONICWALL EPSS TZ-270 (02-SSC-6745)",
        brand:"Sonicwall",
        category:"Security",
        price:19000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:460,
        name:"Sonicwall EPSS TZ570 3 Yr 02-SSC-5139",
        brand:"Sonicwall",
        category:"Security",
        price:23000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:461,
        name:"SONICWALL FIREWALL SSL VPN 10 USER LICENSE",
        brand:"Sonicwall",
        category:"Security",
        price:8500,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:462,
        name:"Sonicwall Next Gen Firewall TZ570 02-SSC-8436",
        brand:"Sonicwall",
        category:"Security",
        price:64000,
        stock:true,
        image:"img/products/firewall.png",
        rating:5
    },

    {
        id:463,
        name:"SOPHOS XGS 108 Appliance",
        brand:"Sophos",
        category:"Security",
        price:39000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:464,
        name:"Sophos XGS 108 Standard Protection 3 Yr",
        brand:"Sophos",
        category:"Security",
        price:25000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:465,
        name:"SOPHOS XGS 88 Firewall",
        brand:"Sophos",
        category:"Security",
        price:36000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:466,
        name:"SOPHOS XGS-2100 FIREWALL",
        brand:"Sophos",
        category:"Security",
        price:76000,
        stock:true,
        image:"img/products/firewall.png",
        rating:5
    },

    {
        id:467,
        name:"SOPHOS XGS138 Firewall",
        brand:"Sophos",
        category:"Security",
        price:52000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:468,
        name:"SOPHOS Xtreme Protection Bundle for XGS138 3Yr",
        brand:"Sophos",
        category:"Security",
        price:32000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:469,
        name:"SOPHOS Xtreme Protection for XGS88 - 3 Years",
        brand:"Sophos",
        category:"Security",
        price:28000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:470,
        name:"Splicing of OFC Per Core",
        brand:"Generic",
        category:"Service",
        price:2500,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:3
    },

    {
        id:471,
        name:"Stecker 10M Copper 4K HDMI Cable",
        brand:"Stecker",
        category:"Accessories",
        price:850,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:472,
        name:"Stecker 15M Copper 4K HDMI Cable",
        brand:"Stecker",
        category:"Accessories",
        price:900,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:473,
        name:"Stecker 20M Copper 4K HDMI Cable",
        brand:"Stecker",
        category:"Accessories",
        price:950,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:474,
        name:"Stecker 5M HDMI Cable 4K",
        brand:"Stecker",
        category:"Accessories",
        price:700,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:475,
        name:"STECKER USB CABLE 4K 10M",
        brand:"Stecker",
        category:"Accessories",
        price:950,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:476,
        name:"Synology NAS Box DS 925+",
        brand:"Synology",
        category:"Storage",
        price:45000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:477,
        name:"Synology NAS DS925+",
        brand:"Synology",
        category:"Storage",
        price:45000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:478,
        name:"Tally Multiuser",
        brand:"Tally",
        category:"Software",
        price:14000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:479,
        name:"Tata Trynox 6U Wall Mount Rack (550mm X 400mm)",
        brand:"Tata",
        category:"Accessories",
        price:6500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:480,
        name:"TL-ARCHER AXE95 AXE7800 TRIBAND",
        brand:"TP-Link",
        category:"Wireless",
        price:21000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:481,
        name:"TP-Link 16 Port Managed Switch Non-POE TL-SG2210",
        brand:"TP-Link",
        category:"Networking",
        price:13000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:482,
        name:"TP-Link 16 Port PoE Switch TL-SG1218MP",
        brand:"TP-Link",
        category:"Networking",
        price:15000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:483,
        name:"TP-Link 8 Port PoE Switch TL-SG1210P",
        brand:"TP-Link",
        category:"Networking",
        price:8500,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:484,
        name:"TP-LINK Access Point Cpe-710, 23 Dbi Out Door",
        brand:"TP-Link",
        category:"Wireless",
        price:12000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:485,
        name:"TP-Link Access Point Outdoor EAP650-Outdoor",
        brand:"TP-Link",
        category:"Wireless",
        price:15000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:486,
        name:"TP-Link EAP 610 Indoor Access Point",
        brand:"TP-Link",
        category:"Wireless",
        price:13000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:487,
        name:"TP-Link EAP-235 Wireless Access Point",
        brand:"TP-Link",
        category:"Wireless",
        price:11500,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:488,
        name:"TP-Link EAP115",
        brand:"TP-Link",
        category:"Wireless",
        price:9500,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:489,
        name:"TP-Link LS105GP 5 Port Giga PoE+ Switch",
        brand:"TP-Link",
        category:"Networking",
        price:7800,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:490,
        name:"TP-LINK Media Converter MC210CS Single Mode",
        brand:"TP-Link",
        category:"Networking",
        price:4500,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:491,
        name:"TP-LINK ROUTER ARCHER C6 AC1200",
        brand:"TP-Link",
        category:"Networking",
        price:5400,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:492,
        name:"TP-LINK SFP MODULE SM5110-SR",
        brand:"TP-Link",
        category:"Networking",
        price:2900,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:493,
        name:"TP-LINK TL-SG1005D 5 Port Gigabit Switch",
        brand:"TP-Link",
        category:"Networking",
        price:3200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:494,
        name:"TP-LINK TL-SG1016-DE",
        brand:"TP-Link",
        category:"Networking",
        price:9800,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:495,
        name:"TP-LINK TL-SG1024D",
        brand:"TP-Link",
        category:"Networking",
        price:11000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:496,
        name:"TP-Link TL-SG1218MPE",
        brand:"TP-Link",
        category:"Networking",
        price:14500,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:497,
        name:"TP-LINK TL-SG1428PE 24 PORT PoE Switch",
        brand:"TP-Link",
        category:"Networking",
        price:19000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:498,
        name:"TP-Link TL-SG2210MP 8 Port PoE Switch",
        brand:"TP-Link",
        category:"Networking",
        price:13000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:499,
        name:"TP-Link TL-SG3428",
        brand:"TP-Link",
        category:"Networking",
        price:21000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:500,
        name:"TP-Link TL-SG3428XMP",
        brand:"TP-Link",
        category:"Networking",
        price:23000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:501,
        name:"TP-Link TL-WR850N Router 300Mbps",
        brand:"TP-Link",
        category:"Networking",
        price:3400,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:502,
        name:"Tube Ferrul both end",
        brand:"Generic",
        category:"Accessories",
        price:120,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:3
    },

    {
        id:503,
        name:"Ubiquity Unify Access Point U6+",
        brand:"Ubiquiti",
        category:"Wireless",
        price:16800,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:504,
        name:"Ugreen 5 in 1 USB C Multifunction Adapter",
        brand:"Ugreen",
        category:"Accessories",
        price:4200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:505,
        name:"Versa CLD SVC-VHM-M-3YR",
        brand:"Versa",
        category:"Security",
        price:18000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:506,
        name:"Versa CSG770",
        brand:"Versa",
        category:"Security",
        price:29000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:507,
        name:"Versa PRIME SDW-100M-3YR",
        brand:"Versa",
        category:"Security",
        price:20000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:508,
        name:"Versa SUP-NBDAR-CSG365-3YR",
        brand:"Versa",
        category:"Security",
        price:23000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:509,
        name:"WD 2TB SATA 3.5\" HDD",
        brand:"WD",
        category:"Storage",
        price:6000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:510,
        name:"WD 4TB Enterprise Ultrastar 7200 RPM HDD",
        brand:"WD",
        category:"Storage",
        price:12000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:511,
        name:"WD 4TB Surveillance HDD",
        brand:"WD",
        category:"Storage",
        price:9000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:512,
        name:"WD 8TB My Book Ext HDD",
        brand:"WD",
        category:"Storage",
        price:11500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:513,
        name:"WD Blue NVMe 500GB",
        brand:"WD",
        category:"Storage",
        price:4200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:514,
        name:"WD HDD 16TB",
        brand:"WD",
        category:"Storage",
        price:15800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:515,
        name:"WD HDD 20TB Enterprise Ultrastar",
        brand:"WD",
        category:"Storage",
        price:22000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:516,
        name:"WD HDD 6TB Surveillance AV SV",
        brand:"WD",
        category:"Storage",
        price:10500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:517,
        name:"WD Passport 4TB External SSD",
        brand:"WD",
        category:"Storage",
        price:8900,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:518,
        name:"WD Purple 10TB Surveillance HDD",
        brand:"WD",
        category:"Storage",
        price:13200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:519,
        name:"WD Purple 8TB Surveillance HDD",
        brand:"WD",
        category:"Storage",
        price:11800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:520,
        name:"WD Ultrastar 7.2K RPM 16TB HDD",
        brand:"WD",
        category:"Storage",
        price:16500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:521,
        name:"WiFi Analytic Solution",
        brand:"Generic",
        category:"Software",
        price:18000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:522,
        name:"WIFITICS ANALYTIC SOLUTION",
        brand:"WIFITICS",
        category:"Software",
        price:20000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:523,
        name:"Windows Server 2025 STD OEM",
        brand:"Microsoft",
        category:"Software",
        price:24500,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:524,
        name:"Zebronics Keyboard USB",
        brand:"Zebronics",
        category:"Accessories",
        price:790,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:525,
        name:"Zebronics Mouse USB",
        brand:"Zebronics",
        category:"Accessories",
        price:690,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:526,
        name:"ZYXEL CAT 6 23AWG FRPVC CABLE 305M",
        brand:"Zyxel",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:527,
        name:"ZYXEL CAT 6 24AWG DOUBLE JACKET CABLE 305M",
        brand:"Zyxel",
        category:"Networking",
        price:4700,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:528,
        name:"ZYXEL CAT 6 24AWG ECCS ARMOURED CABLE 305M",
        brand:"Zyxel",
        category:"Networking",
        price:5200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:529,
        name:"Zyxel CAT 6 24AWG ECCS Armoured Cable per mtr",
        brand:"Zyxel",
        category:"Networking",
        price:22,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:530,
        name:"ZYXEL CAT 6 I/O RJ 45 KEYSTONE BLUE",
        brand:"Zyxel",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:531,
        name:"ZYXEL CAT 6 UTP PATCH CHORD LSZH 1M BLUE",
        brand:"Zyxel",
        category:"Networking",
        price:260,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:532,
        name:"ZYXEL CAT 6 UTP PATCH CHORD LSZH 1M GREY",
        brand:"Zyxel",
        category:"Networking",
        price:260,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:533,
        name:"ZYXEL CAT 6 UTP PATCH CHORD LSZH 2M YELLOW",
        brand:"Zyxel",
        category:"Networking",
        price:310,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:534,
        name:"Zyxel GS2220-28HP 24 Port PoE Switch",
        brand:"Zyxel",
        category:"Networking",
        price:19000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:535,
        name:"ZYXEL LIU 12F LOADED WITH SM LC DUPLEX ADAPTER",
        brand:"Zyxel",
        category:"Networking",
        price:8200,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:536,
        name:"ZYXEL OFC 12F SM MULTITUBE SINGLE SHEATH OUTDOOR ARMOURED",
        brand:"Zyxel",
        category:"Networking",
        price:15000,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:537,
        name:"ZYXEL OFC 6F SM MULTITUBE SINGLE SHEATH OUTDOOR ARMOURED",
        brand:"Zyxel",
        category:"Networking",
        price:9500,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:538,
        name:"ZYXEL PATCH PANEL 24 PORT UNLOADED",
        brand:"Zyxel",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:539,
        name:"ZYXEL PATCH PANEL LOADED WITH BLACK IO",
        brand:"Zyxel",
        category:"Networking",
        price:5200,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:540,
        name:"Zyxel SFP Module MM",
        brand:"Zyxel",
        category:"Networking",
        price:2200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    }

];