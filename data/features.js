import {
  Activity,
  AreaChart,
  Bell,
  Blocks,
  Box,
  BrainCircuit,
  BrainCog,
  BrickWall,
  Cctv,
  Cloud,
  Component,
  Cpu,
  Crosshair,
  Database,
  DatabaseBackup,
  DatabaseZap,
  Gauge,
  Glasses,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  Headphones,
  History,
  Languages,
  Layers,
  LayoutDashboard,
  Leaf,
  Lock,
  Mail,
  MessageCircleWarning,
  Monitor,
  MonitorSmartphone,
  Move3D,
  Network,
  Nfc,
  PenSquare,
  PencilRuler,
  Phone,
  Pointer,
  Puzzle,
  RefreshCcw,
  Replace,
  Router,
  Scan,
  ScanSearch,
  ScrollText,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShieldEllipsis,
  ShieldHalf,
  ShieldQuestion,
  Siren,
  SplitSquareVertical,
  SunMoon,
  Timer,
  User,
  Users,
  VenetianMask,
  Wifi,
  Workflow,
} from "lucide-react";

const features = [
  {
    name: "Web Hosting",
    description:
      "Reliable and scalable hosting solutions for your online presence.",
    icon: <Router />,
    slug: "web-hosting",
    sections: [
      {
        type: "grid",
        variant: "filled",
        content: {
          subtitle: "Performance",
          title: "Experience Blazing Fast Website Speeds",
          image: {
            src: "/assets/pages/features/vectors/server-3.svg",
            alt: "Performant server",
          },
          cards: [
            {
              title: "Optimized Servers",
              summary: "Our servers are optimized for maximum performance.",
              icon: <Server />,
            },
            {
              title: "Content Delivery Network (CDN)",
              summary: "Utilize our CDN for faster content delivery worldwide.",
              icon: <Box />,
            },
            {
              title: "SSD Storage",
              summary: "Benefit from high-speed SSD storage for your data.",
              icon: <HardDrive />,
            },
            {
              title: "24/7 Support",
              summary:
                "Get round-the-clock support for any hosting-related issues.",
              icon: <Headphones />,
            },
          ],
        },
      },
      {
        type: "gallery",
        content: {
          title: "Hosting features",
          subtitle: "Discover What Sets Us Apart",
          boxes: [
            {
              paragraph:
                "Discover the power of reliable hosting with our feature-packed plans. Enjoy the benefits of high-speed servers, secure data storage, and responsive support.",
              image: {
                src: "/assets/pages/features/vectors/device-4.svg",
                alt: "Reliable device",
              },
              button: {
                text: "Get Started",
                href: "/contact",
              },
            },
            {
              title: "Secure Data Centers",
              summary:
                "Our state-of-the-art data centers ensure the security and integrity of your website data.",
              image: {
                src: "/assets/pages/features/vectors/device-3.svg",
                alt: "Smaller device",
              },
            },
            {
              title: "Easy Website Migration",
              summary:
                "Effortlessly migrate your website to our hosting platform with our expert assistance.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/device-2.svg",
                alt: "Easily migratable server",
              },
            },
          ],
        },
      },
      {
        type: "triple",
        variant: "filled",
        content: {
          subtitle: "Security",
          title: "Ensuring Your Website's Security",
          cards: [
            {
              title: "SSL Certificates",
              summary:
                "Every hosting plan includes free SSL certificates for secure data transmission.",
              icon: <ScrollText />,
            },
            {
              title: "Regular Backups",
              summary:
                "Automated backups ensure your website data is safe and can be restored at any time.",
              icon: <RefreshCcw />,
            },
            {
              title: "Firewall Protection",
              summary:
                "Our robust firewall protection safeguards your website from online threats.",
              icon: <Shield />,
            },
          ],
        },
      },
      {
        type: "double",
        content: {
          subtitle: "Scalability",
          title: "Grow Your Online Presence with Scalable Hosting",
          paragraphs: [
            "Experience the flexibility of our hosting solutions that scale with your website's needs. Whether you're a startup or a growing enterprise, our hosting adapts to your requirements.",
          ],
          image: {
            src: "/assets/pages/features/vectors/database-1.svg",
            alt: "Scalable database",
          },
        },
      },
    ],
  },
  {
    name: "Automation",
    description:
      "Streamline workflows and boost efficiency through intelligent automation processes.",
    icon: <Workflow />,
    slug: "automation",
    sections: [
      {
        type: "grid",
        content: {
          subtitle: "Efficiency",
          title:
            "Revolutionize Workflows with Automation to increase productivity",
          image: {
            src: "/assets/pages/features/vectors/database-2.svg",
            alt: "Efficient network",
          },
          cards: [
            {
              title: "Workflow Optimization",
              summary:
                "Maximize efficiency by automating repetitive tasks. Our automation solutions optimize your workflow for peak performance.",
              icon: <Workflow />,
            },
            {
              title: "Time Savings",
              summary:
                "Save valuable time and resources with intelligent automation. Focus on strategic tasks while routine processes run seamlessly.",
              icon: <Timer />,
            },
            {
              title: "Error Reduction",
              summary:
                "Minimize errors and enhance accuracy with automated processes. Our solutions ensure precision in every step of your workflow.",
              icon: <MessageCircleWarning />,
            },
            {
              title: "Adaptability",
              summary:
                "Our automation adapts to your evolving needs. Easily customize processes to meet the changing demands of your business.",
              icon: <PenSquare />,
            },
          ],
        },
      },
      {
        type: "double",
        variant: "reversed",
        content: {
          subtitle: "Automation Solutions",
          title: "Intelligent Tools for Streamlined Workflows",
          paragraphs: [
            "Unlock the power of automation to streamline your workflows. Our intelligent tools enhance efficiency and drive business success.",
          ],
          image: {
            src: "/assets/pages/features/vectors/ai-2.svg",
            alt: "Automation Solutions Image",
          },
        },
      },
      {
        type: "triple",
        content: {
          subtitle: "Insights",
          title: "Efficiency Beyond Boundaries",
          cards: [
            {
              title: "Smart Processes",
              summary:
                "Experience the brilliance of smart processes. Our automation solutions intelligently adapt to dynamic business environments.",
              icon: <BrainCog />,
            },
            {
              title: "Data Precision",
              summary:
                "Ensure data accuracy with automated precision. Our tools handle data with care, reducing errors and improving data quality.",
              icon: <Crosshair />,
            },
            {
              title: "Customization",
              summary:
                "Tailor automation to fit your unique requirements. Customize processes to align with your specific business needs and goals.",
              icon: <PencilRuler />,
            },
          ],
        },
      },
      {
        type: "gallery",
        content: {
          subtitle: "Automation",
          title: "Unlock Your Business Potential",
          boxes: [
            {
              paragraph:
                "Transform your business with our automation solutions. Streamline workflows, boost efficiency, and elevate your overall productivity.",
              image: {
                src: "/assets/pages/features/vectors/server-4.svg",
                alt: "automated server",
              },
              button: {
                text: "Get Started Now",
                href: "/",
              },
            },
            {
              title: "Effortless Processes",
              summary:
                "Experience the ease of effortless processes. Our automation tools simplify complex tasks, making business operations smoother.",
              image: {
                src: "/assets/pages/features/vectors/server-1.svg",
                alt: "Efficient server",
              },
            },
            {
              title: "Innovative Solutions",
              summary:
                "Embrace innovation with our cutting-edge automation solutions. Stay ahead in the competitive landscape with our intelligent tools.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/server-2.svg",
                alt: "Innovative server",
              },
            },
          ],
        },
      },
    ],
  },
  {
    name: "Server Farm",
    description:
      "High-performance server infrastructure for seamless data processing and storage.",
    icon: <Server />,
    slug: "server-farm",
    sections: [
      {
        type: "gallery",
        content: {
          title: "Explore Our Server Infrastructure",
          subtitle: "Infrastructure",
          boxes: [
            {
              paragraph:
                "Unlock the potential of high-performance server infrastructure with our server farm solutions. Dive into the features that make our servers the backbone of seamless data processing and storage.",
              image: {
                src: "/assets/pages/features/vectors/server-3.svg",
                alt: "Server infrastructure",
              },
              button: {
                text: "Contact us",
                href: "/contact",
              },
            },
            {
              title: "Scalable Architecture",
              summary:
                "Our server farm features a scalable architecture to accommodate your growing data needs.",
              image: {
                src: "/assets/pages/features/vectors/device-4.svg",
                alt: "Scaled server",
              },
            },
            {
              title: "Redundant Systems",
              summary:
                "Experience uninterrupted service with redundant systems that ensure continuous data availability.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/device-5.svg",
                alt: "Redundancy server",
              },
            },
          ],
        },
      },
      {
        type: "double",
        content: {
          subtitle: "Efficiency",
          title: "Optimized Data Processing for Maximum Efficiency",
          paragraphs: [
            "Our server farm is designed to deliver efficient data processing, ensuring that your applications and services run seamlessly. Experience high-speed data processing with our cutting-edge server infrastructure.",
          ],
          image: {
            src: "/assets/pages/features/vectors/chip-1.svg",
            alt: "Efficient processing chip",
          },
        },
      },
      {
        type: "triple",
        content: {
          subtitle: "Reliable Storage",
          title: "Secure and Reliable Data Storage Solutions",
          cards: [
            {
              title: "High-Capacity Storage",
              summary:
                "Benefit from high-capacity storage options tailored to meet your data storage requirements.",
              icon: <HardDrive />,
            },
            {
              title: "Data Redundancy",
              summary:
                "Ensure data integrity with redundant storage systems that safeguard against data loss.",
              icon: <DatabaseBackup />,
            },
            {
              title: "24/7 Monitoring",
              summary:
                "Our server farm undergoes continuous monitoring to detect and address potential storage issues proactively.",
              icon: <Scan />,
            },
          ],
        },
      },
      {
        type: "grid",
        content: {
          subtitle: "Connectivity",
          title: "Seamless Connectivity for Enhanced Performance",
          image: {
            src: "/assets/pages/features/vectors/laptop-1.svg",
            alt: "Laptop connecting to server",
          },
          cards: [
            {
              title: "High-Speed Network",
              summary:
                "Experience low-latency connectivity with our high-speed network infrastructure.",
              icon: <Gauge />,
            },
            {
              title: "Load Balancing",
              summary:
                "Optimize resource utilization with load balancing for uniform distribution of workloads.",
              icon: <SplitSquareVertical />,
            },
            {
              title: "Distributed Architecture",
              summary:
                "Our distributed architecture enhances performance by distributing workloads across multiple servers.",
              icon: <Network />,
            },
            {
              title: "Scalable Bandwidth",
              summary:
                "Easily scale your bandwidth to accommodate varying levels of network traffic.",
              icon: <Wifi />,
            },
          ],
        },
      },
    ],
  },
  {
    name: "Cybersecurity",
    description:
      "Robust defenses and proactive measures to secure your digital assets.",
    icon: <Shield />,
    slug: "cybersecurity",
    sections: [
      {
        type: "triple",
        content: {
          subtitle: "Digital Defense",
          title: "Robust Defenses for Your Digital Assets",
          cards: [
            {
              title: "Firewall Protection",
              summary:
                "Safeguard your network with advanced firewall protection to block unauthorized access.",
              icon: <BrickWall />,
            },
            {
              title: "Intrusion Detection System (IDS)",
              summary:
                "Proactively detect and respond to potential security threats with our IDS technology.",
              icon: <VenetianMask />,
            },
            {
              title: "Real-time Monitoring",
              summary:
                "Monitor your digital assets in real-time to identify and address security incidents promptly.",
              icon: <Glasses />,
            },
          ],
        },
      },
      {
        type: "double",
        variant: "reverse",
        content: {
          subtitle: "Proactive Measures",
          title: "Take Proactive Measures to Enhance Security",
          paragraphs: [
            "Our cybersecurity solutions go beyond defense — we take proactive measures to ensure the ongoing security of your digital assets. Stay ahead of potential threats with our advanced security protocols.",
          ],
          image: {
            src: "/assets/pages/features/vectors/ai-1.svg",
            alt: "Active defense system",
          },
        },
      },
      {
        type: "grid",
        variant: "filled",
        content: {
          subtitle: "Secure Access",
          title: "Ensure Secure Access to Your Digital Environment",
          image: {
            src: "/assets/pages/features/vectors/database-2.svg",
            alt: "Secure Access Image",
          },
          cards: [
            {
              title: "Multi-factor Authentication (MFA)",
              summary:
                "Add an extra layer of security with MFA to verify user identities.",
              icon: <Layers />,
            },
            {
              title: "Access Controls",
              summary:
                "Define granular access controls to restrict and manage user permissions effectively.",
              icon: <LayoutDashboard />,
            },
            {
              title: "Encryption Protocols",
              summary:
                "Encrypt data in transit and at rest to protect sensitive information from unauthorized access.",
              icon: <Lock />,
            },
            {
              title: "User Activity Logging",
              summary:
                "Keep track of user activities with comprehensive logging for security auditing.",
              icon: <User />,
            },
          ],
        },
      },
      {
        type: "gallery",
        content: {
          title: "Explore Our Cybersecurity Features",
          subtitle: "Solutions",
          boxes: [
            {
              paragraph:
                "Our cybersecurity features are designed to provide robust protection for your digital assets. Explore the features that make us a trusted partner in cybersecurity.",
              image: {
                src: "/assets/pages/features/vectors/chip-3.svg",
                alt: "Cybersecurity Features",
              },
              button: {
                text: "Contact us",
                href: "/contact",
              },
            },
            {
              title: "Vulnerability Assessments",
              summary:
                "Identify and address potential vulnerabilities in your digital environment with our assessments.",
              image: {
                src: "/assets/pages/features/vectors/device-1.svg",
                alt: "Vulnerability Assessments",
              },
            },
            {
              title: "Security Patch Management",
              summary:
                "Stay up-to-date with the latest security patches to protect against known vulnerabilities.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/server-4.svg",
                alt: "Secure server",
              },
            },
          ],
        },
      },
    ],
  },
  {
    name: "Backup and Disaster Recovery",
    description:
      "Ensure data integrity with reliable backup solutions and rapid recovery mechanisms.",
    icon: <Activity />,
    slug: "backup-and-disaster-recovery",
    sections: [
      {
        type: "triple",
        variant: "filled",
        content: {
          subtitle: "Data Integrity",
          title: "Maintain Data Integrity with Advanced Backups",
          cards: [
            {
              title: "Automated Backup",
              summary:
                "Enjoy peace of mind with scheduled automated backups to prevent data loss.",
              icon: <HardDriveDownload />,
            },
            {
              title: "Incremental Backups",
              summary:
                "Efficiently store data changes with incremental backups for optimized storage usage.",
              icon: <HardDriveUpload />,
            },
            {
              title: "Version Control",
              summary:
                "Keep track of changes and restore previous versions with our version control feature.",
              icon: <History />,
            },
          ],
        },
      },
      {
        type: "gallery",
        content: {
          title: "Secure Your Data with Our Robust Backup Features",
          subtitle: "Backup",
          boxes: [
            {
              paragraph:
                "Our backup and disaster recovery solutions ensure the safety and accessibility of your critical data. Explore the features that make us a reliable choice for data protection.",
              image: {
                src: "/assets/pages/features/vectors/computer-1.svg",
                alt: "Backup Solutions",
              },
              button: {
                text: "contact us",
                href: "/contact",
              },
            },
            {
              title: "Rapid Data Recovery",
              summary:
                "Experience swift data recovery with our advanced mechanisms to minimize downtime.",
              image: {
                src: "/assets/pages/features/vectors/device-5.svg",
                alt: "Data Recovery",
              },
            },
            {
              title: "Customizable Retention Policies",
              summary:
                "Tailor retention policies to suit your data management strategy for optimal control.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/device-3.svg",
                alt: "Backup policies",
              },
            },
          ],
        },
      },
      {
        type: "double",
        content: {
          subtitle: "Disaster Recovery",
          title: "Swift Recovery in Times of Crisis",
          paragraphs: [
            "Prepare for the unexpected with our disaster recovery solutions. Our rapid recovery mechanisms ensure minimal downtime in the face of unforeseen events.",
          ],
          image: {
            src: "/assets/pages/features/vectors/laptop-1.svg",
            alt: "Disaster Recovery",
          },
        },
      },
      {
        type: "grid",
        variant: "reverse",
        content: {
          subtitle: "Secure Backups",
          title: "Enhance Security with Our Encrypted Backup Solutions",
          image: {
            src: "/assets/pages/features/vectors/server-6.svg",
            alt: "Secure Backups Image",
          },
          cards: [
            {
              title: "End-to-End Encryption",
              summary:
                "Protect your data with end-to-end encryption during the backup process.",
              icon: <Lock />,
            },
            {
              title: "Secure Storage",
              summary:
                "Store your backups in secure and redundant storage infrastructure for added protection.",
              icon: <Database />,
            },
            {
              title: "Access Controls",
              summary:
                "Define access controls to ensure that only authorized personnel can manage and restore backups.",
              icon: <LayoutDashboard />,
            },
            {
              title: "24/7 Monitoring",
              summary:
                "Our backup systems undergo continuous monitoring to detect and address potential issues proactively.",
              icon: <Search />,
            },
          ],
        },
      },
    ],
  },
  {
    name: "Email Solutions",
    description:
      "Efficient and secure email platforms tailored to your communication needs.",
    icon: <Mail />,
    slug: "email-solutions",
    sections: [
      {
        type: "gallery",
        content: {
          title: "Explore Our Email Solutions",
          subtitle: "Customizability",
          boxes: [
            {
              paragraph:
                "Discover the efficiency and security of our email solutions designed to meet your communication needs. Explore the features that make our platforms the ideal choice for seamless and secure email communication.",
              image: {
                src: "/assets/pages/features/vectors/database-1.svg",
                alt: "A database",
              },
              button: {
                text: "Contact us",
                href: "/contact",
              },
            },
            {
              title: "Custom Email Domains",
              summary:
                "Establish a professional identity with custom email domains tailored to your business.",
              image: {
                src: "/assets/pages/features/vectors/device-3.svg",
                alt: "Custom Email Domains Image",
              },
            },
            {
              title: "End-to-End Encryption",
              summary:
                "Ensure the privacy and security of your communications with end-to-end encryption.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/device-1.svg",
                alt: "Email Platforms Image",
              },
            },
          ],
        },
      },
      {
        type: "triple",
        content: {
          subtitle: "Efficient Communication",
          title: "Streamlined Email Communication for Productivity",
          cards: [
            {
              title: "User-Friendly Interface",
              summary:
                "Navigate our email platforms with ease, providing a seamless communication experience.",
              icon: <Pointer />,
            },
            {
              title: "Collaborative Features",
              summary:
                "Enhance teamwork with collaborative features that foster effective communication.",
              icon: <Users />,
            },
            {
              title: "Mobile Accessibility",
              summary:
                "Stay connected on the go with mobile accessibility for our email platforms.",
              icon: <MonitorSmartphone />,
            },
          ],
        },
      },
      {
        type: "grid",
        content: {
          subtitle: "Security Measures",
          title: "Ensuring Email Security with Advanced Measures",
          image: {
            src: "/assets/pages/features/vectors/database-2.svg",
            alt: "Security Measures Image",
          },
          cards: [
            {
              title: "Spam Filtering",
              summary:
                "Our advanced spam filtering prevents unwanted emails from reaching your inbox.",
              icon: <ShieldAlert />,
            },
            {
              title: "Anti-Phishing Protection",
              summary:
                "Protect against phishing attacks with our robust anti-phishing measures.",
              icon: <ShieldQuestion />,
            },
            {
              title: "Multi-Layered Authentication",
              summary:
                "Add an extra layer of security with multi-layered authentication for email access.",
              icon: <ShieldHalf />,
            },
            {
              title: "Regular Security Audits",
              summary:
                "Ensure the ongoing security of your email platform with regular security audits.",
              icon: <ShieldEllipsis />,
            },
          ],
        },
      },
      {
        type: "double",
        variant: "reversed",
        content: {
          subtitle: "Tailored Solutions",
          title: "Tailored Email Platforms for Your Business",
          paragraphs: [
            "Our email solutions are tailored to meet the unique communication needs of your business. Whether you're a small startup or a large enterprise, our platforms adapt to your requirements.",
          ],
          image: {
            src: "/assets/pages/features/vectors/laptop-1.svg",
            alt: "Tailored Email Solutions Image",
          },
        },
      },
    ],
  },
  {
    name: "Virtualization",
    description:
      "Optimize resource utilization and flexibility through virtualization technologies.",
    icon: <Monitor />,
    slug: "virtualization",
    sections: [
      {
        type: "grid",
        content: {
          subtitle: "Resource Optimization",
          title: "Maximize Efficiency with Virtualization",
          image: {
            src: "/assets/pages/features/vectors/computer-1.svg",
            alt: "Virtual server experience",
          },
          cards: [
            {
              title: "Server Virtualization",
              summary:
                "Optimize server resources by running multiple virtual servers on a single physical machine.",
              icon: <Server />,
            },
            {
              title: "Network Virtualization",
              summary:
                "Enhance network efficiency by decoupling network services from the underlying hardware.",
              icon: <Router />,
            },
            {
              title: "Storage Virtualization",
              summary:
                "Improve storage management by abstracting physical storage devices into a virtualized pool.",
              icon: <DatabaseZap />,
            },
            {
              title: "Desktop Virtualization",
              summary:
                "Facilitate flexible desktop management by virtualizing desktop environments for end-users.",
              icon: <Monitor />,
            },
          ],
        },
      },
      {
        type: "gallery",
        content: {
          title: "Explore Virtualization Technologies",
          subtitle: "Transforming IT Infrastructure",
          boxes: [
            {
              paragraph:
                "Discover the transformative power of virtualization technologies that optimize resource utilization and flexibility. Explore our virtualization solutions designed to meet the evolving needs of modern IT infrastructure.",
              image: {
                src: "/assets/pages/features/vectors/server-3.svg",
                alt: "Virtualization Technologies",
              },
              button: {
                text: "Get Started",
                href: "/",
              },
            },
            {
              title: "Hybrid Cloud Integration",
              summary:
                "Integrate virtualization with hybrid cloud solutions for enhanced scalability and flexibility.",
              image: {
                src: "/assets/pages/features/vectors/server-4.svg",
                alt: "Hybrid Cloud Integration",
              },
            },
            {
              title: "Resource Pooling",
              summary:
                "Efficiently allocate and manage resources through virtualization technologies for optimal performance.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/server-1.svg",
                alt: "Virtualization Solutions Image",
              },
            },
          ],
        },
      },
      {
        type: "double",
        content: {
          subtitle: "Flexibility and Scalability",
          title: "Achieve Flexibility and Scalability with Virtualization",
          paragraphs: [
            "Our virtualization technologies empower your IT infrastructure with unparalleled flexibility and scalability. Experience the benefits of dynamic resource allocation and efficient management.",
          ],
          image: {
            src: "/assets/pages/features/vectors/chip-3.svg",
            alt: "Flexibility and Scalability",
          },
        },
      },
      {
        type: "triple",
        content: {
          subtitle: "Cost Savings",
          title: "Realize Cost Savings through Virtualization",
          cards: [
            {
              title: "Hardware Consolidation",
              summary:
                "Reduce hardware costs by consolidating multiple virtualized workloads on a single physical machine.",
              icon: <Cpu />,
            },
            {
              title: "Energy Efficiency",
              summary:
                "Contribute to environmental sustainability and reduce energy costs through efficient resource utilization.",
              icon: <Leaf />,
            },
            {
              title: "Operational Efficiency",
              summary:
                "Streamline IT operations and reduce operational costs with simplified management through virtualization.",
              icon: <Replace />,
            },
          ],
        },
      },
    ],
  },
  {
    name: "Database",
    description:
      "State-of-the-art facilities to house and manage your critical digital assets.",
    icon: <Database />,
    slug: "database",
    sections: [
      {
        type: "double",
        content: {
          subtitle: "Data Management",
          title: "Efficient Data Management with Our Database Solutions",
          paragraphs: [
            "Experience state-of-the-art facilities designed to house and manage your critical digital assets. Our database solutions provide efficient data management, ensuring the integrity and accessibility of your information.",
          ],
          image: {
            src: "/assets/pages/features/vectors/server-3.svg",
            alt: "Database",
          },
        },
      },
      {
        type: "grid",
        variant: "reverse",
        content: {
          subtitle: "Features",
          title: "Explore Advanced Features of Our Database Solutions",
          image: {
            src: "/assets/pages/features/vectors/ai-2.svg",
            alt: "Advanced Features Image",
          },
          cards: [
            {
              title: "Scalable Architecture",
              summary:
                "Adapt to changing data needs with our database's scalable architecture for optimal performance.",
              icon: <Network />,
            },
            {
              title: "Data Encryption",
              summary:
                "Ensure the security of your data with robust encryption mechanisms integrated into our database solutions.",
              icon: <Lock />,
            },
            {
              title: "Automated Backups",
              summary:
                "Protect against data loss with automated backups that ensure the availability of your critical information.",
              icon: <RefreshCcw />,
            },
            {
              title: "Query Optimization",
              summary:
                "Optimize database queries for faster and more efficient data retrieval and processing.",
              icon: <Gauge />,
            },
          ],
        },
      },
      {
        type: "gallery",
        content: {
          title: "Discover Our Database Facilities",
          subtitle: "Secure and Reliable Data Storage",
          boxes: [
            {
              paragraph:
                "Explore our cutting-edge database facilities designed to meet the highest standards of security and reliability. Discover the features that make us a trusted partner for your data storage needs.",
              image: {
                src: "/assets/pages/features/vectors/database-1.svg",
                alt: "Database Facilities ",
              },
              button: {
                text: "Get Started",
                href: "/",
              },
            },
            {
              title: "High-Speed Storage",
              summary:
                "Experience fast and reliable storage infrastructure to support the demands of your data-intensive applications.",
              image: {
                src: "/assets/pages/features/vectors/device-2.svg",
                alt: "High-Speed Storage",
              },
            },
            {
              title: "Customizable Indexing",
              summary:
                "Tailor indexing options to optimize database performance and enhance data retrieval efficiency.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/device-5.svg",
                alt: "Database ",
              },
            },
          ],
        },
      },
      {
        type: "triple",
        content: {
          subtitle: "Reliability and Security",
          title:
            "Prioritize Reliability and Security with Our Database Solutions",
          cards: [
            {
              title: "Redundant Systems",
              summary:
                "Ensure continuous data availability with redundant systems that protect against hardware failures.",
              icon: <Replace />,
            },
            {
              title: "Data Integrity",
              summary:
                "Safeguard the integrity of your data with advanced measures implemented in our database solutions.",
              icon: <Shield />,
            },
            {
              title: "Access Controls",
              summary:
                "Manage access to your database securely by implementing granular access controls for user permissions.",
              icon: <LayoutDashboard />,
            },
          ],
        },
      },
    ],
  },
  {
    name: "AI Engine",
    description:
      "Harness the power of artificial intelligence for data analysis, predictions, and insights.",
    icon: <BrainCircuit />,
    slug: "ai-engine",
    sections: [
      {
        type: "triple",
        content: {
          subtitle: "Data Analysis",
          title: "Empower Data Analysis with Our AI Engine",
          cards: [
            {
              title: "Advanced Analytics",
              summary:
                "Unlock deeper insights and patterns in your data through the advanced analytics capabilities of our AI engine.",
              icon: <AreaChart />,
            },
            {
              title: "Predictive Modeling",
              summary:
                "Make informed decisions with predictive modeling that anticipates future trends based on historical data.",
              icon: <Component />,
            },
            {
              title: "Natural Language Processing (NLP)",
              summary:
                "Enhance data understanding with NLP, allowing the AI engine to interpret and analyze human language.",
              icon: <Languages />,
            },
          ],
        },
      },
      {
        type: "grid",
        content: {
          subtitle: "AI-Powered Insights",
          title: "Gain Valuable Insights with AI-Powered Analytics",
          image: {
            src: "/assets/pages/features/vectors/ai-2.svg",
            alt: "AI-Powered Insights",
          },
          cards: [
            {
              title: "Pattern Recognition",
              summary:
                "Let our AI engine recognize and analyze complex patterns within your data for actionable insights.",
              icon: <Puzzle />,
            },
            {
              title: "Anomaly Detection",
              summary:
                "Detect outliers and anomalies in your data sets, enabling quick identification of potential issues.",
              icon: <Shield />,
            },
            {
              title: "Automated Reporting",
              summary:
                "Simplify reporting processes with automated generation of insights and analysis from your data.",
              icon: <ScanSearch />,
            },
            {
              title: "Continuous Learning",
              summary:
                "Enable continuous learning as the AI engine adapts and improves its analysis based on new data inputs.",
              icon: <Blocks />,
            },
          ],
        },
      },
      {
        type: "double",
        variant: "reversed",
        content: {
          subtitle: "Predictive Capabilities",
          title: "Harness Predictive Capabilities for Future Success",
          paragraphs: [
            "Our AI engine goes beyond traditional data analysis, offering predictive capabilities that empower your organization for future success. Leverage the power of artificial intelligence for accurate predictions and strategic planning.",
          ],
          image: {
            src: "/assets/pages/features/vectors/chip-2.svg",
            alt: "Predictive Capabilities",
          },
        },
      },
      {
        type: "gallery",
        content: {
          title: "Explore the Potential of AI",
          subtitle: "Transformative AI Solutions for Your Business",
          boxes: [
            {
              paragraph:
                "Discover the transformative potential of AI with our cutting-edge solutions. Explore the features that make our AI engine a powerful tool for data-driven decision-making and business success.",
              image: {
                src: "/assets/pages/features/vectors/laptop-1.svg",
                alt: "AI Solutions",
              },
              button: {
                text: "Get Started",
                href: "/",
              },
            },
            {
              title: "Customizable Algorithms",
              summary:
                "Tailor algorithms to match your specific business requirements and enhance the precision of AI-driven insights.",
              image: {
                src: "/assets/pages/features/vectors/server-4.svg",
                alt: "Customizable Algorithms",
              },
            },
            {
              title: "Scalable Infrastructure",
              summary:
                "Scale your AI infrastructure as needed to accommodate growing data volumes and analysis demands.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/server-1.svg",
                alt: "AI Engine Image",
              },
            },
          ],
        },
      },
    ],
  },
  {
    name: "Security Camera System",
    description:
      "Surveillance solutions that provide a watchful eye over your physical and digital spaces.",
    icon: <Cctv />,
    slug: "security-camera-system",
    sections: [
      {
        type: "gallery",
        content: {
          title: "Explore Our Surveillance Solutions",
          subtitle: "Surveillance",
          boxes: [
            {
              paragraph:
                "Discover peace of mind with our advanced security camera systems, providing vigilant surveillance for both your physical and digital spaces. Explore the features that make our solutions a reliable guardian for your security needs.",
              image: {
                src: "/assets/pages/features/vectors/computer-1.svg",
                alt: "Surveillance Solutions Image",
              },
              button: {
                text: "Contact us",
                href: "/contact",
              },
            },
            {
              title: "High-Resolution Cameras",
              summary:
                "Capture clear and detailed footage with our high-resolution cameras for enhanced surveillance.",
              image: {
                src: "/assets/pages/features/vectors/server-4.svg",
                alt: "High-Resolution Cameras Image",
              },
            },
            {
              title: "Smart Analytics",
              summary:
                "Enable intelligent monitoring with smart analytics that detect and alert on unusual activities.",
            },
            {
              image: {
                src: "/assets/pages/features/vectors/chip-2.svg",
                alt: "Security Camera System",
              },
            },
          ],
        },
      },
      {
        type: "triple",
        content: {
          subtitle: "Feature rich",
          title: "Comprehensive Surveillance for Enhanced Security",
          cards: [
            {
              title: "24/7 Monitoring",
              summary:
                "Our security camera systems provide round-the-clock monitoring for continuous security surveillance.",
              icon: <SunMoon />,
            },
            {
              title: "Pan-Tilt-Zoom (PTZ) Cameras",
              summary:
                "Gain flexibility in surveillance with PTZ cameras, allowing remote control for optimal viewing angles.",
              icon: <Move3D />,
            },
            {
              title: "Infrared Night Vision",
              summary:
                "Maintain visibility in low-light conditions with infrared night vision capabilities of our cameras.",
              icon: <Siren />,
            },
          ],
        },
      },
      {
        type: "double",
        variant: "reversed",
        content: {
          subtitle: "Integration",
          title: "Seamless Integration for Unified Security",
          paragraphs: [
            "Integrate our security camera systems seamlessly into your existing security infrastructure, creating a unified and robust security solution. Our solutions are designed for easy integration and compatibility.",
          ],
          image: {
            src: "/assets/pages/features/vectors/laptop-1.svg",
            alt: "Integration Capabilities",
          },
        },
      },
      {
        type: "grid",
        content: {
          subtitle: "Remote Monitoring",
          title: "Secure Remote Monitoring for Peace of Mind",
          image: {
            src: "/assets/pages/features/vectors/server-6.svg",
            alt: "Remote Monitoring Image",
          },
          cards: [
            {
              title: "Mobile Access",
              summary:
                "Monitor your spaces on the go with secure mobile access to the live feed from your security cameras.",
              icon: <Phone />,
            },
            {
              title: "Cloud-Based Storage",
              summary:
                "Store and access your surveillance footage securely with our cloud-based storage solutions.",
              icon: <Cloud />,
            },
            {
              title: "Real-time Alerts",
              summary:
                "Receive real-time alerts on your devices for immediate awareness of security incidents.",
              icon: <Bell />,
            },
            {
              title: "Two-Way Communication",
              summary:
                "Enhance security response with two-way communication capabilities for remote interaction.",
              icon: <Nfc />,
            },
          ],
        },
      },
    ],
  },
];

// Programmatically create href to feature's page
features.forEach((data) => (data.href = `/features/${data.slug}`));

export default features;
