const products = [

    {
        id:1,
        name:"Cisco Catalyst 9200 Switch",
        brand:"Cisco",
        category:"Networking",
        price:45000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:2,
        name:"Dell PowerEdge R750 Server",
        brand:"Dell",
        category:"Servers",
        price:125000,
        stock:true,
        image:"img/products/dellServer.png",
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
        stock:false,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:5,
        name:"TP-Link ER8411 Router",
        brand:"TP-Link",
        category:"Networking",
        price:6000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:6,
        name:"Ubiquiti UniFi Network Device",
        brand:"Ubiquiti",
        category:"Wireless",
        price:12000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:5
    },

    {
        id:7,
        name:"Fiber Optic Cable Kit",
        brand:"Corning",
        category:"Networking",
        price:3500,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:8,
        name:"LAN Cable Pack",
        brand:"Panduit",
        category:"Networking",
        price:2800,
        stock:false,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:9,
        name:"2 Pair Connector",
        brand:"Generic",
        category:"Accessories",
        price:120,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:10,
        name:"25mm PVC Conduit",
        brand:"Generic",
        category:"Accessories",
        price:180,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:11,
        name:"Accessories for LAN work",
        brand:"Generic",
        category:"Accessories",
        price:450,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:12,
        name:"ACER ALTOS SERVER T15 F6 EPYC 4124P 4C",
        brand:"Acer",
        category:"Server",
        price:290000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:13,
        name:"Acer Laptop ALG AL15G-53",
        brand:"Acer",
        category:"Laptop",
        price:68000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:4
    },

    {
        id:14,
        name:"Adobe Acrobat Standard",
        brand:"Adobe",
        category:"Software",
        price:9200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:15,
        name:"Allied Telesis AT-X230-28GP Switch",
        brand:"Allied Telesis",
        category:"Networking",
        price:58000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:16,
        name:"Allied Telesis SFP+ Module",
        brand:"Allied Telesis",
        category:"Networking",
        price:11500,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:17,
        name:"AMC Charges",
        brand:"Generic",
        category:"Service",
        price:3500,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:18,
        name:"AMD CPU EPYC 7H12",
        brand:"AMD",
        category:"Server",
        price:190000,
        stock:true,
        image:"img/products/servers.png",
        rating:5
    },

    {
        id:19,
        name:"APC 1000VA UPS",
        brand:"APC",
        category:"Power",
        price:14500,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:20,
        name:"APC UPS 6KVA SRV 6K UXI-IN",
        brand:"APC",
        category:"Power",
        price:76000,
        stock:true,
        image:"img/products/firewall.png",
        rating:5
    },

    {
        id:21,
        name:"APC UPS BVX1600LI-IN",
        brand:"APC",
        category:"Power",
        price:22000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:22,
        name:"APC UPS SRV3K-RIL-IN",
        brand:"APC",
        category:"Power",
        price:41000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:23,
        name:"APW 15U Rack 550x600mm",
        brand:"APW",
        category:"Rack",
        price:8200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:24,
        name:"Aruba 1930 24Port PoE Switch 370W (JL684A)",
        brand:"Aruba",
        category:"Networking",
        price:67000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:25,
        name:"Aruba Ap 505",
        brand:"Aruba",
        category:"Wireless",
        price:26000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:26,
        name:"Aruba AP-515 (RW) Unified AP Q9H62A",
        brand:"Aruba",
        category:"Wireless",
        price:32000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:5
    },

    {
        id:27,
        name:"Aruba Instant On 1930 24G 4 SFP Switch (JL682A)",
        brand:"Aruba",
        category:"Networking",
        price:51000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:28,
        name:"Aruba Instant On 1930 48G 4SFP Switch (JL685A)",
        brand:"Aruba",
        category:"Networking",
        price:71000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:29,
        name:"Aruba Instant On 1930 8port 2SFP 124W Switch (JL681A)",
        brand:"Aruba",
        category:"Networking",
        price:46000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:30,
        name:"Aruba Instant On AP22 (RW) R4W02",
        brand:"Aruba",
        category:"Wireless",
        price:17000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:31,
        name:"Aruba InstantOn 1830 24G Switch JL812A",
        brand:"Aruba",
        category:"Networking",
        price:28000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:32,
        name:"Aruba InstantOn AP21 Access Point",
        brand:"Aruba",
        category:"Wireless",
        price:15000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:33,
        name:"Aruba InstantOn AP25",
        brand:"Aruba",
        category:"Wireless",
        price:18000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:34,
        name:"Aruba InstantOn JL813A PoE Switch 1830",
        brand:"Aruba",
        category:"Networking",
        price:31000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:35,
        name:"Aruba JL683A 1930 24 Port PoE Switch",
        brand:"Aruba",
        category:"Networking",
        price:42000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:36,
        name:"Aruba JL683B 1930 24G 4SFP+ 195W",
        brand:"Aruba",
        category:"Networking",
        price:46000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:37,
        name:"Aruba JL684B 1930 24G 4SFP+370W Switch",
        brand:"Aruba",
        category:"Networking",
        price:48000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:38,
        name:"Aruba JL686B 1930 48P Class 4 PoE 4 SFP+ 370W Switch",
        brand:"Aruba",
        category:"Networking",
        price:56000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:39,
        name:"Aruba Mountin Kit",
        brand:"Aruba",
        category:"Accessories",
        price:1200,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:40,
        name:"ARUBA SFP Module J4858D",
        brand:"Aruba",
        category:"Networking",
        price:11500,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:41,
        name:"Aruba SFP Module J4859D",
        brand:"Aruba",
        category:"Networking",
        price:11800,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:42,
        name:"ATEN KVM Switch 4 Port",
        brand:"ATEN",
        category:"Accessories",
        price:8500,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:43,
        name:"Beetel C51 Phones",
        brand:"Beetel",
        category:"Phones",
        price:1900,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:44,
        name:"Beetel Phone M-25",
        brand:"Beetel",
        category:"Phones",
        price:2300,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:45,
        name:"Belden CAT 6 UTP Patch Chord 5M",
        brand:"Belden",
        category:"Networking",
        price:420,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:46,
        name:"Belden OS2 LC-LC Fiber Patch Chord 3Mtr",
        brand:"Belden",
        category:"Networking",
        price:850,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:47,
        name:"Benq MW560N Projector",
        brand:"Benq",
        category:"Display",
        price:54000,
        stock:true,
        image:"img/products/dellServer.png",
        rating:5
    },

    {
        id:48,
        name:"BNC Connector",
        brand:"Generic",
        category:"Accessories",
        price:75,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:49,
        name:"Brother Printer DCP-B7640DWB",
        brand:"Brother",
        category:"Printer",
        price:25000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:50,
        name:"Brother Toner NTB021",
        brand:"Brother",
        category:"Printer",
        price:2800,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:51,
        name:"Cable Manager 1U",
        brand:"Generic",
        category:"Accessories",
        price:700,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:52,
        name:"Cable Tie",
        brand:"Generic",
        category:"Accessories",
        price:40,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:53,
        name:"CABLEWISE HDMI AOC Fiber Cable 4K 2.0 15M",
        brand:"Cablewise",
        category:"Cables",
        price:3650,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:54,
        name:"CABLEWISE HDMI AOC Fiber Cable 4K 2.0 20M",
        brand:"Cablewise",
        category:"Cables",
        price:4250,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:55,
        name:"CABLEWISE HDMI AOC Fiber Cable 4K 2.0 30M",
        brand:"Cablewise",
        category:"Cables",
        price:5000,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:56,
        name:"Cablewise HDMI PVC Cable 10.0mtr",
        brand:"Cablewise",
        category:"Cables",
        price:990,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:57,
        name:"Cantiliver Tray",
        brand:"Generic",
        category:"Accessories",
        price:950,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:58,
        name:"Casing",
        brand:"Generic",
        category:"Accessories",
        price:650,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:59,
        name:"CAT 6 LAN Cable",
        brand:"Generic",
        category:"Networking",
        price:210,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:60,
        name:"CCTV Box 5x5",
        brand:"Generic",
        category:"CCTV",
        price:350,
        stock:true,
        image:"img/products/netDevice.png",
        rating:3
    },

    {
        id:61,
        name:"CCTV Stand (Height expandable)",
        brand:"Generic",
        category:"CCTV",
        price:1200,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:62,
        name:"Cisco C1300 24T 4G",
        brand:"Cisco",
        category:"Networking",
        price:29000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:63,
        name:"CISCO C1300-24P-4G",
        brand:"Cisco",
        category:"Networking",
        price:36000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:64,
        name:"CISCO C1300-8P-E-2G",
        brand:"Cisco",
        category:"Networking",
        price:32000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:65,
        name:"CISCO C8200 DNA-P-T1-A-3Y",
        brand:"Cisco",
        category:"Networking",
        price:95000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:66,
        name:"CISCO C8200-1N-4T",
        brand:"Cisco",
        category:"Networking",
        price:78000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:67,
        name:"CISCO C9115AXI-D Wireless Access Point",
        brand:"Cisco",
        category:"Wireless",
        price:32000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:5
    },

    {
        id:68,
        name:"CISCO C9200L-DNA-E-48-3Y",
        brand:"Cisco",
        category:"Networking",
        price:88000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:69,
        name:"CISCO CON-SNT-C8200 3Y",
        brand:"Cisco",
        category:"Support",
        price:22000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:70,
        name:"CISCO CON-SNT-C9200 48P 3 Y",
        brand:"Cisco",
        category:"Support",
        price:26000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:71,
        name:"CISCO GLC-LH-SM SFP",
        brand:"Cisco",
        category:"Networking",
        price:4200,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:72,
        name:"CISCO GLC-T SFP",
        brand:"Cisco",
        category:"Networking",
        price:3800,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:73,
        name:"CISCO Meraki LIC-ENT-1Y",
        brand:"Cisco",
        category:"License",
        price:12000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:74,
        name:"CISCO Meraki LIC-MS225-24P-1YR",
        brand:"Cisco",
        category:"License",
        price:15000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:75,
        name:"CISCO MERAKI LIC-MX95-SEC-1Y",
        brand:"Cisco",
        category:"License",
        price:19000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:76,
        name:"CISCO Meraki LIC-MX95-SEC-3Y",
        brand:"Cisco",
        category:"License",
        price:42000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:77,
        name:"CISCO Meraki MR Enterprise License, 3YR",
        brand:"Cisco",
        category:"License",
        price:28000,
        stock:true,
        image:"img/products/router.png",
        rating:4
    },

    {
        id:78,
        name:"CISCO Meraki MR44 WiFi 6 Indoor AP",
        brand:"Cisco",
        category:"Wireless",
        price:35000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:5
    },

    {
        id:79,
        name:"CISCO Meraki MR46-HWC",
        brand:"Cisco",
        category:"Wireless",
        price:42000,
        stock:true,
        image:"img/products/netDevice.png",
        rating:5
    },

    {
        id:80,
        name:"CISCO Meraki MS225-24P-HWC",
        brand:"Cisco",
        category:"Networking",
        price:47000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:5
    },

    {
        id:81,
        name:"CISCO Meraki MX95-HWC",
        brand:"Cisco",
        category:"Networking",
        price:62000,
        stock:true,
        image:"img/products/firewall.png",
        rating:5
    },

    {
        id:82,
        name:"CMOS Battery 2032",
        brand:"Generic",
        category:"Accessories",
        price:90,
        stock:true,
        image:"img/products/router.png",
        rating:3
    },

    {
        id:83,
        name:"COMMSCOPE 6 CORE MULTI MODE FIBER CABLE OM3-2121106-3",
        brand:"Commscope",
        category:"Networking",
        price:7600,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:84,
        name:"Commscope AMP 12 Port LIU Loaded",
        brand:"Commscope",
        category:"Networking",
        price:8500,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:85,
        name:"Commscope AMP 24 Port CAT 6.0 Loaded Patch Panel",
        brand:"Commscope",
        category:"Networking",
        price:15000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:86,
        name:"Commscope AMP 24AWG CAT6.0 305M Cable",
        brand:"Commscope",
        category:"Networking",
        price:6900,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:87,
        name:"Commscope AMP 48 Core SM Armoured Optical Fiber Cable",
        brand:"Commscope",
        category:"Networking",
        price:22500,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:88,
        name:"Commscope AMP 48 Port 2U Patch Panel",
        brand:"Commscope",
        category:"Networking",
        price:17000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:89,
        name:"Commscope AMP 6 Core Armored OM4 MM OFC Cable",
        brand:"Commscope",
        category:"Networking",
        price:12800,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:90,
        name:"Commscope AMP 6 Port LIU Loaded",
        brand:"Commscope",
        category:"Networking",
        price:7000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:91,
        name:"Commscope AMP CAT 6.0 UTP Cable 305M ROLL",
        brand:"Commscope",
        category:"Networking",
        price:5600,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:92,
        name:"Commscope AMP CAT 6.0 UTP PATCH CHORD 1M",
        brand:"Commscope",
        category:"Networking",
        price:110,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:93,
        name:"Commscope AMP CAT 6.0 UTP Patch Chord 2M Blue",
        brand:"Commscope",
        category:"Networking",
        price:150,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:94,
        name:"Commscope AMP CAT 6.0 UTP Patch Chord 3M",
        brand:"Commscope",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:95,
        name:"Commscope AMP CAT 6.0 UTP Patch Chord 5M",
        brand:"Commscope",
        category:"Networking",
        price:220,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:96,
        name:"Commscope AMP CAT 6A Patch Chord 1M",
        brand:"Commscope",
        category:"Networking",
        price:260,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:97,
        name:"Commscope AMP CAT 6A Patch Cord 3M",
        brand:"Commscope",
        category:"Networking",
        price:320,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:98,
        name:"COMMSCOPE AMP CAT6 I/O",
        brand:"Commscope",
        category:"Networking",
        price:350,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:99,
        name:"Commscope AMP CAT6A I/O",
        brand:"Commscope",
        category:"Networking",
        price:420,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:100,
        name:"Commscope AMP CAT6A UTP Cable 305M Roll",
        brand:"Commscope",
        category:"Networking",
        price:6200,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:101,
        name:"COMMSCOPE AMP CCA CONNECTORS",
        brand:"Commscope",
        category:"Accessories",
        price:180,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:102,
        name:"Commscope AMP Face Plate Dual Port",
        brand:"Commscope",
        category:"Accessories",
        price:320,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:103,
        name:"Commscope AMP Face Plate Single Port",
        brand:"Commscope",
        category:"Accessories",
        price:220,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:104,
        name:"COMMSCOPE AMP OFC 6 CORE OM3",
        brand:"Commscope",
        category:"Networking",
        price:7200,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:105,
        name:"Commscope AMP Patch Panel Unloaded 24 Port",
        brand:"Commscope",
        category:"Networking",
        price:5600,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:106,
        name:"Commscope AMP Pigtail MM LC Type",
        brand:"Commscope",
        category:"Networking",
        price:240,
        stock:true,
        image:"img/products/fiberOpt.png",
        rating:4
    },

    {
        id:107,
        name:"COMMSCOPE AMP RJ45 CONNECTOR",
        brand:"Commscope",
        category:"Accessories",
        price:80,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:108,
        name:"Commscope CAT 6 I/O Universal",
        brand:"Commscope",
        category:"Networking",
        price:310,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:109,
        name:"Commscope Netconnect 1967320-2 RJ45 Jack Case for face plate",
        brand:"Commscope",
        category:"Accessories",
        price:250,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:110,
        name:"Commscope RJ45 Connector",
        brand:"Commscope",
        category:"Accessories",
        price:90,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:111,
        name:"Commscope Systimax 2 Port Shuttered Face Plate",
        brand:"Commscope",
        category:"Accessories",
        price:420,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:112,
        name:"Commscope Systimax 3x3 squire sing port face plate",
        brand:"Commscope",
        category:"Accessories",
        price:360,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:113,
        name:"Commscope Systimax CAT 6 I/O",
        brand:"Commscope",
        category:"Networking",
        price:340,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:114,
        name:"Commscope Systimax CAT 6 Patch Chord 2M",
        brand:"Commscope",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:115,
        name:"Commscope systimax CAT 6.0 UTP Cable 305M Roll",
        brand:"Commscope",
        category:"Networking",
        price:6100,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:116,
        name:"Consistant 512GB NVMe",
        brand:"Consistant",
        category:"Storage",
        price:4200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:117,
        name:"CONSOLE CABLE Usb Branded 1.8M",
        brand:"Generic",
        category:"Accessories",
        price:280,
        stock:true,
        image:"img/products/lanCable.png",
        rating:3
    },

    {
        id:118,
        name:"CONSULTATION CHARGES - MISC",
        brand:"Generic",
        category:"Service",
        price:1500,
        stock:true,
        image:"img/products/servers.png",
        rating:3
    },

    {
        id:119,
        name:"CP PLUS 16 PORT POE GIGA SWITCH",
        brand:"CP Plus",
        category:"Networking",
        price:24000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:120,
        name:"CP Plus 2.4MP Dome Camera CP-URC-DC24PL3-0360",
        brand:"CP Plus",
        category:"CCTV",
        price:3800,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:121,
        name:"CP PLUS 2MP IP BULLET CAMERA",
        brand:"CP Plus",
        category:"CCTV",
        price:3300,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:122,
        name:"CP PLUS 2MP IP DOME CAMERA",
        brand:"CP Plus",
        category:"CCTV",
        price:3400,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:123,
        name:"CP Plus 32 Ch NVR",
        brand:"CP Plus",
        category:"CCTV",
        price:52000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:124,
        name:"CP Plus 4MP IP Bullet Camera",
        brand:"CP Plus",
        category:"CCTV",
        price:4200,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:125,
        name:"CP PLUS 4MP IP Dome Camera",
        brand:"CP Plus",
        category:"CCTV",
        price:4600,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:126,
        name:"CP Plus 4MP IP Dome Camera CP-UNC-DA41PL3CC",
        brand:"CP Plus",
        category:"CCTV",
        price:4700,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:127,
        name:"CP Plus 8 CH NVR 2 SATA CP-UNR-4K4082-V4",
        brand:"CP Plus",
        category:"CCTV",
        price:28000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:128,
        name:"CP PLUS 8 CH NVR CP-UNR-108F1",
        brand:"CP Plus",
        category:"CCTV",
        price:22000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:129,
        name:"CP Plus 8 Port PoE Switch CP-ANW-HPU8G2-N12",
        brand:"CP Plus",
        category:"Networking",
        price:16000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:130,
        name:"CP Plus DVR 16Ch CP-UVR-1601E1-IC",
        brand:"CP Plus",
        category:"CCTV",
        price:18000,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:131,
        name:"CP Plus IP Bullet Camera 2MP CP-UNC-TA21PL3-YC",
        brand:"CP Plus",
        category:"CCTV",
        price:3150,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:132,
        name:"CyberPower UPS UT2200",
        brand:"CyberPower",
        category:"Power",
        price:26000,
        stock:true,
        image:"img/products/firewall.png",
        rating:4
    },

    {
        id:133,
        name:"D-LINK 12U RACK",
        brand:"D-Link",
        category:"Rack",
        price:6800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:134,
        name:"D-Link 15U Rack",
        brand:"D-Link",
        category:"Rack",
        price:7500,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:135,
        name:"D-Link 24 Port CAT 6 Patch Panel Loaded",
        brand:"D-Link",
        category:"Networking",
        price:7000,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:136,
        name:"D-LINK 24 PORT PATCH PANEL UNLOADED",
        brand:"D-Link",
        category:"Networking",
        price:5200,
        stock:true,
        image:"img/products/networkSwitch.png",
        rating:4
    },

    {
        id:137,
        name:"D-Link 4U Network Rack",
        brand:"D-Link",
        category:"Rack",
        price:6800,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:138,
        name:"D-Link 9U Rack",
        brand:"D-Link",
        category:"Rack",
        price:5200,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:139,
        name:"D-Link 9U Wall Mount Rack",
        brand:"D-Link",
        category:"Rack",
        price:4600,
        stock:true,
        image:"img/products/servers.png",
        rating:4
    },

    {
        id:140,
        name:"D-link Armored CAT 6 305 Mtr Roll",
        brand:"D-Link",
        category:"Networking",
        price:5900,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:141,
        name:"D-Link CAT 5e Cable 305M Roll",
        brand:"D-Link",
        category:"Networking",
        price:4800,
        stock:true,
        image:"img/products/lanCable.png",
        rating:4
    },

    {
        id:142,
        name:"D-LINK CAT 6 I/O",
        brand:"D-Link",
        category:"Networking",
        price:180,
        stock:true,
        image:"img/products/netDevice.png",
        rating:4
    },

    {
        id:143,
        name:"D-LINK CAT 6.0 CABLE 100Mtr ROLL",
        brand:"D-Link",
        category:"Networking",
        price:1900,
        stock:true,
        image:"img/products/lanCable.png",
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