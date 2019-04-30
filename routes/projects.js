const router = require('express').Router()
const fetch = require('node-fetch')
require('dotenv').config()

router.get('/', (req, res) => {
  // if(req.query.page === undefined) {
  //   fetch(`https://api.hackaday.io/v1/projects?api_key=${process.env.API_KEY}&per_page=9&page=1`)
  //   .then(res => res.json())
  //   .then(projects => {
  //     console.log(projects)
  //     res.render('index', { projects: projects.projects })
  //   })
  //   .catch(err => console.error(err))
  // }
  res.render('index', { projects : [
    {
      "id": 5373,
      "url": "https://hackaday.io/project/5373-hack-chat",
      "owner_id": 182178,
      "name": "Hack Chat",
      "summary": "Use the team chat to talk about your projects and find collaborators for whatever you are working on.",
      "description": "If you need help on your project you&apos;ve come to the right place. \r\nClick on the &quot;Public Chat&quot; button on the left top and you&apos;re automatically in. \r\n\r\nThose that just want to talk about hacking have found the place as well. All are welcome!",
      "image_url": "https://cdn.hackaday.io/images/7255311484679597966.png",
      "views": 53584,
      "comments": 193,
      "followers": 2519,
      "skulls": 1359,
      "logs": 0,
      "details": 1,
      "instruction": 1,
      "components": 0,
      "images": 3,
      "created": 1429655720,
      "updated": 1556126879,
      "tags": [
        "ongoing project"
      ]
    },
    {
      "id": 1313,
      "url": "https://hackaday.io/project/1313-openmv",
      "owner_id": 10526,
      "name": "OpenMV",
      "summary": "Python-powered machine vision modules",
      "description": "The OpenMV project aims at making machine vision more accessible to beginners by developing a user-friendly, open-source, low-cost machine vision platform.\r\n\r\nOpenMV cameras are programmable in Python3 and come with an extensive set of image processing functions such as face detection, keypoints descriptors, color tracking, QR and Bar codes decoding, AprilTags, GIF and MJPEG recording and more.\r\n\r\nAdditionally, OpenMV includes a cross-platform IDE (based on Qt Creator) designed specifically to support programmable cameras. The IDE allows viewing the camera&apos;s frame buffer, accessing sensor controls, uploading scripts to the camera via serial over USB (or WiFi/BLE if available) and includes a set of image processing tools to generate tags, thresholds, keypoints etc...\r\n\r\nThe OpenMV project is a THP semifinalist and was successfully funded via Kickstarter back in 2015 and has come a long way since then.",
      "image_url": "https://cdn.hackaday.io/images/5817461406329458960.JPG",
      "views": 202215,
      "comments": 210,
      "followers": 3493,
      "skulls": 1355,
      "logs": 19,
      "details": 1,
      "instruction": 0,
      "components": 10,
      "images": 6,
      "created": 1401763612,
      "updated": 1554388653,
      "tags": [
        "STM32F407",
        "camera",
        "OpenMV",
        "arm",
        "TheHackadayPrize",
        "python",
        "stm32f7",
        "machine vision",
        "ongoing project",
        "STm32f429"
      ]
    },
    {
      "id": 19035,
      "url": "https://hackaday.io/project/19035-zerophone-a-raspberry-pi-smartphone",
      "owner_id": 61401,
      "name": "ZeroPhone - a Raspberry Pi smartphone",
      "summary": "Pi Zero-based open-source mobile phone (that you can assemble for 50$ in parts)",
      "description": "This is a mobile phone that:\r\n\r\n- First and foremost, will be a well-working reliable phone\r\n- Is as open-source as possible *while also being cheap*\r\n- Can be assembled and repaired independently\r\n- Is easy to get parts for\r\n- Doesn&apos;t have apps with privacy concerns\r\n- Allows to write your own apps in Python\r\n\r\nIt costs about 50$ in parts, and all the parts are available on eBay/TaoBao/etc, most of the phone can be assembled with just a soldering iron. User interface is written using Python \r\nand is being morphed into a lightweight phone-tailored UI framework.\r\n\r\nA crowdfunded manufacturing run is expected in a month - kits will be available, as well as a small batch of fully-assembled phones. Subscribe to newsletter below!",
      "image_url": "https://cdn.hackaday.io/images/7473031508515021059.jpg",
      "views": 348540,
      "comments": 146,
      "followers": 1576,
      "skulls": 1106,
      "logs": 50,
      "details": 1,
      "instruction": 10,
      "components": 27,
      "images": 5,
      "created": 1482175178,
      "updated": 1552196301,
      "tags": [
        "pi zero",
        "raspberry pi",
        "ongoing project",
        "hardware",
        "mobile phone",
        "2017HackadayPrize",
        "GSM",
        "zerophone",
        "Phone"
      ]
    },
    {
      "id": 3800,
      "url": "https://hackaday.io/project/3800-3d-printable-robot-arm",
      "owner_id": 2561,
      "name": "3D Printable Robot Arm",
      "summary": "A printable robot arm, a little bigger than the usual hobby servo once.  ",
      "description": "My printable robot arm is inspired by the well known industry robots, but printable.\r\nThe goal is to develop a open source robot arm to use in private or small businesses and make robot development available for every one.  \r\nThe arm should lift about 2 kg enough to perform every day tasks.  Currently robot arms are expensive or small and weak, or clumpy. \r\nIndustrial robots are expensive and dangerous and for that not suitable for using at home or schools. \r\nA Open Source printable robot can build,used and developed by every one. \r\nRobots are still expensive and hard to operate, but this must not longer be the case. \r\nA cheap 3d printed robot arm could be used by disabled persons to manage their daily needs better and more independent. Operate at dangerous but not so developed places. \r\nRemote controlled you could even us the robot to open your door if you forgot your keys.\r\n\r\nThe future Arm will include a moving base. \r\n",
      "image_url": "https://cdn.hackaday.io/images/848911460535166971.jpg",
      "views": 193331,
      "comments": 105,
      "followers": 1953,
      "skulls": 1077,
      "logs": 18,
      "details": 1,
      "instruction": 1,
      "components": 4,
      "images": 6,
      "created": 1420754811,
      "updated": 1555943009,
      "tags": [
        "ongoing project",
        "hardware",
        "hackadayprize",
        "arduino",
        "robot arm",
        "led",
        "ROBOT",
        "2015HackadayPrize",
        "3D Print"
      ]
    },
    {
      "id": 13466,
      "url": "https://hackaday.io/project/13466-raspberry-pi-smart-mirror",
      "owner_id": 148563,
      "name": "Raspberry Pi Smart Mirror",
      "summary": "A mirror which displays applications, other useful information",
      "description": "In this video, we show you how to make an easy raspberry pi powered home smart mirror. It displays applications so that you can check the weather and local news while you are getting ready in the morning. It&apos;s also modular, so you can easy move it around or hang it on the wall if you like.  We&apos;ve created a basic application that you can run on the mirror, but it&apos;s totally customizable if you want to write some of your own code. \r\n\r\nIn the future, we plan to add AI components to make this fully automated. We are drawing inspiration from this project:  <a href=\"https://www.youtube.com/watch?v=sc9UbREmo58\" target=\"_blank\">https://www.youtube.com/watch?v=sc9UbREmo58</a>. Stay tuned for a future video about that!",
      "image_url": "https://cdn.hackaday.io/images/4075911473092005133.jpg",
      "views": 159884,
      "comments": 30,
      "followers": 1727,
      "skulls": 1012,
      "logs": 0,
      "details": 1,
      "instruction": 0,
      "components": 6,
      "images": 1,
      "created": 1473092117,
      "updated": 1549710146,
      "tags": [
        "raspberry pi",
        "hardware",
        "completed project",
        "Software"
      ]
    },
    {
      "id": 1538,
      "url": "https://hackaday.io/project/1538-portablesdr",
      "owner_id": 9087,
      "name": "PortableSDR",
      "summary": "Fully stand-alone HF (Shortwave) Software Defined Transceiver & Vector Network Analyzer. Designed for rugged portable use. Highly hackable.",
      "description": "The PSDR is a completely stand-alone (no computer needed), compact, Portable Software Defined Transceiver (hence the name, sorta). Originally designed for backpacking use by Ham Radio operators. It includes complete coverage up to about 30Mhz (plus 144Mhz), it has a 168Mhz ARM processor, color display, and an innovative interface.\r\n\r\nVector Network Analysis (which includes antenna analysis) and GPS functions are included.\r\n\r\nThe entire design is Open Source. The electronics are designed and laid out to be easy to understand and tinker with. In addition to source code, schematics, board layout and parts lists, articles and videos describing the theory of the design are being created.",
      "image_url": "https://cdn.hackaday.io/images/7760611421216476601.jpg",
      "views": 192096,
      "comments": 197,
      "followers": 2362,
      "skulls": 994,
      "logs": 28,
      "details": 1,
      "instruction": 8,
      "components": 16,
      "images": 6,
      "created": 1403234611,
      "updated": 1555630231,
      "tags": [
        "TheHackadayPrize",
        "ham radio",
        "ongoing project",
        "Amateur Radio",
        "rf",
        "PortableSDR",
        "SDR",
        "arm",
        "VNA",
        "radio",
        "PSDR",
        "STM32"
      ]
    },
    {
      "id": 283,
      "url": "https://hackaday.io/project/283-pcb-mill-for-under-10",
      "owner_id": 894,
      "name": "PCB mill for under $10",
      "summary": "pcb mill built from garbage using basic hand tools and little money",
      "description": "A gradually improving attempt to make a useful pcb mill out of a printer and other assorted garbage, with a minimal budget and no fancy tools. It works!, but let's see how much better it can be.",
      "image_url": "https://cdn.hackaday.io/images/9555871394520169199.jpg",
      "views": 213008,
      "comments": 62,
      "followers": 2536,
      "skulls": 958,
      "logs": 9,
      "details": 1,
      "instruction": 0,
      "components": 11,
      "images": 6,
      "created": 1393891681,
      "updated": 1552165567,
      "tags": [
        "arduino",
        "cheap",
        "vector graphics",
        "plotter",
        "ongoing",
        "garbage",
        "pcb mill"
      ]
    },
    {
      "id": 2040,
      "url": "https://hackaday.io/project/2040-web-security-everywhere",
      "owner_id": 19546,
      "name": "Web security everywhere",
      "summary": "Secure your Internet, control your data, fight censorship.\r\nBring your autonomous all in one privacy device everywhere.",
      "description": "In a world where digital privacy doesn't exist anymore, where journalists couldn't securely do their work, where companies are spyed upon by various entities, and where Human Rights are cynically disregarded, there is an urgent need for an easy-to-use tool to restore digital privacy.\r\n\r\nThis autonomous device uses the available connectivity to build a secure access-point and bypasses internet filters to connect to a remote network, use a secured internet or even browse anonymously.\r\nConnect your laptop/smartphone to the device's secured wifi access-point, no additional setup is needed. Enjoy a secured internet anywhere, anytime.\r\n\r\nIt could connect the internet via a public wifi access-point, 3G internet via phone usb/wifi tethering, corporate cable network, or even your own router/ADSL box.\r\n\r\nIt is very easy to use with its touch control interface and its fully automatized functions.\r\n\r\nIt could run autonomously during several hours on its internal battery.",
      "image_url": "https://cdn.hackaday.io/images/8176021410091861327.JPG",
      "views": 176802,
      "comments": 38,
      "followers": 3587,
      "skulls": 886,
      "logs": 31,
      "details": 1,
      "instruction": 6,
      "components": 10,
      "images": 5,
      "created": 1406155716,
      "updated": 1552165567,
      "tags": [
        "TOR",
        "security",
        "2015HackadayPrize",
        "TheHackadayPrize",
        "wifi",
        "ongoing project",
        "ROUTER",
        "raspberry pi",
        "accesspoint",
        "internet",
        "vpn",
        "web"
      ]
    },
    {
      "id": 1395,
      "url": "https://hackaday.io/project/1395-open-source-science-tricorder",
      "owner_id": 11110,
      "name": "Open Source Science Tricorder",
      "summary": "Science in your hand.  A pocket-sized instrument capable of visualizing and exploring the world around you. ",
      "description": "It is my deep belief that knowledge brings about positive change. \r\n\r\nWe could live in a world where the same instrument that can show a child how much chlorophyll is in a leaf could also show how them much pollution is in the air around us, or given off by one's car. As an educator and a researcher, I feel that if people could easily discover things about their worlds that were also important social topics, that they would then make positive social choices, like reducing their emissions, or petitioning for cleaner industry in their communities. \r\n\r\nBy having access to general inexpensive sensing tools, people can learn about healthy leaves, clean air, clouds and the water cycle, energy efficient homes — and visualize abstract concepts like spectra or magnetism.\r\n\r\nAs a tool for exploration, we can discover things around us that we don't already know. And that's what it's about. Little discoveries, everywhere. ",
      "image_url": "https://cdn.hackaday.io/images/3776181414477226534.jpg",
      "views": 120047,
      "comments": 91,
      "followers": 2919,
      "skulls": 875,
      "logs": 17,
      "details": 1,
      "instruction": 3,
      "components": 31,
      "images": 6,
      "created": 1402115599,
      "updated": 1552049295,
      "tags": [
        "TheHackadayPrize",
        "Tricorder",
        "sensor",
        "sensing"
      ]
    }
  ]})
})

router.get('/:id', (req, res) => {
  res.render(`projects/${req.param.id}`)
})

module.exports = router