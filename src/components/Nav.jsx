import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Images/logo.png';

import Hamburger from 'hamburger-react';

import { ChevronRight, ChevronDown, Cloud, Database, Shield, Cpu, Network, Cog, BarChart, Brain, Video, Wifi, MessageCircle, Zap, Code, Building, Users, Target, ShoppingCart, DollarSign, BookOpen, Calendar, GraduationCap, FileText, Info } from 'lucide-react';

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const navigate = useNavigate();

  const dropdownData = {
    Products: [
      {
        title: 'Computing',
        icon: <Cpu className="w-4 h-4" />,
        items: ['Virtual Machines', 'Container Instances', 'Batch Computing', 'Serverless Functions', 'GPU Computing']
      },
      {
        title: 'Container',
        icon: <Cloud className="w-4 h-4" />,
        items: ['Container Registry', 'Kubernetes Service', 'Container Instances', 'Service Mesh', 'Image Security']
      },
      {
        title: 'Storage',
        icon: <Database className="w-4 h-4" />,
        items: ['Object Storage', 'Block Storage', 'File Storage', 'Archive Storage', 'Backup Solutions']
      },
      {
        title: 'Network & CDN',
        icon: <Network className="w-4 h-4" />,
        items: ['Content Delivery', 'Load Balancer', 'Virtual Network', 'DNS Service', 'VPN Gateway']
      },
      {
        title: 'Security',
        icon: <Shield className="w-4 h-4" />,
        items: ['Identity Management', 'Key Vault', 'Security Center', 'Firewall', 'Threat Detection']
      },
      {
        title: 'Middleware',
        icon: <Cog className="w-4 h-4" />,
        items: ['Message Queue', 'Event Hub', 'Service Bus', 'API Gateway', 'Workflow Engine']
      },
      {
        title: 'Database',
        icon: <Database className="w-4 h-4" />,
        items: ['SQL Database', 'NoSQL Database', 'Cache Service', 'Data Warehouse', 'Database Migration']
      },
      {
        title: 'Analytics Computing',
        icon: <BarChart className="w-4 h-4" />,
        items: ['Data Lake', 'Stream Analytics', 'Big Data', 'Data Factory', 'Business Intelligence']
      },
      {
        title: 'AI and Machine Learning',
        icon: <Brain className="w-4 h-4" />,
        items: ['Machine Learning', 'Computer Vision', 'Natural Language', 'Speech Services', 'Bot Framework']
      },
      {
        title: 'Media Services',
        icon: <Video className="w-4 h-4" />,
        items: ['Video Streaming', 'Content Protection', 'Live Streaming', 'Video Encoding', 'Media Analytics']
      },
      {
        title: 'Internet of Things',
        icon: <Wifi className="w-4 h-4" />,
        items: ['IoT Hub', 'Device Management', 'Edge Computing', 'Time Series', 'Digital Twins']
      },
      {
        title: 'Enterprise Services & Cloud Communication',
        icon: <MessageCircle className="w-4 h-4" />,
        items: ['Email Service', 'SMS Gateway', 'Voice API', 'Video Calling', 'Communication SDK']
      },
      {
        title: 'Serverless',
        icon: <Zap className="w-4 h-4" />,
        items: ['Functions', 'Logic Apps', 'Event Grid', 'Service Bus', 'Cosmos DB Serverless']
      },
      {
        title: 'Developer Tools',
        icon: <Code className="w-4 h-4" />,
        items: ['DevOps', 'Source Control', 'CI/CD Pipeline', 'Testing Tools', 'Monitoring']
      }
    ],
    Solutions: [
      {
        title: 'Solution by Industry',
        icon: <Building className="w-4 h-4" />,
        items: ['Healthcare', 'Financial Services', 'Retail & E-commerce', 'Manufacturing', 'Education']
      },
      {
        title: 'Solution by Use Case',
        icon: <Target className="w-4 h-4" />,
        items: ['Digital Transformation', 'Data Modernization', 'Application Migration', 'Disaster Recovery', 'Cost Optimization']
      },
      {
        title: 'Organization Types',
        icon: <Users className="w-4 h-4" />,
        items: ['Enterprise', 'Small & Medium Business', 'Startups', 'Government', 'Non-Profit']
      }
    ],
    Industries: [
      {
        title: 'Cicosy Marketplace',
        icon: <ShoppingCart className="w-4 h-4" />,
        items: ['Marketplace Solutions', 'Third-party Integrations', 'Partner Applications', 'Certified Solutions', 'Extension Library']
      }
    ],
    Developers: [
      'API Documentation', 'SDKs', 'Code Samples', 'Tutorials',
      'Developer Tools', 'Testing Suite', 'Debug Console', 'Version Control',
      'CI/CD Pipeline', 'Community Forum'
    ],
    Customers: [
      {
        title: 'Cicosy Pricing',
        icon: <DollarSign className="w-4 h-4" />,
        items: ['Enterprise Plans', 'Professional Tiers', 'Custom Solutions', 'Volume Discounts', 'Contract Options']
      },
      {
        title: 'Free Cicosy Pricing',
        icon: <Target className="w-4 h-4" />,
        items: ['Free Tier Limits', 'Trial Periods', 'Community Support', 'Basic Features', 'Getting Started']
      },
      {
        title: 'Pay As You Go Flexible Purchase',
        icon: <Cpu className="w-4 h-4" />,
        items: ['Usage-based Billing', 'Scalable Pricing', 'Real-time Metering', 'Cost Optimization', 'Flexible Scaling']
      },
      {
        title: 'Cicosy Benefits & Incentives',
        icon: <Target className="w-4 h-4" />,
        items: ['Loyalty Programs', 'Partner Benefits', 'Educational Discounts', 'Startup Credits', 'Referral Rewards']
      }
    ],
    Resources: [
      {
        title: 'Community',
        icon: <Users className="w-4 h-4" />,
        items: ['Discussion Forums', 'User Groups', 'Community Events', 'Expert Network', 'Peer Support']
      },
      {
        title: 'Developer Events',
        icon: <Calendar className="w-4 h-4" />,
        items: ['Conferences', 'Workshops', 'Hackathons', 'Meetups', 'Virtual Events']
      },
      {
        title: 'Learning',
        icon: <GraduationCap className="w-4 h-4" />,
        items: ['Online Courses', 'Certification Programs', 'Training Modules', 'Learning Paths', 'Skill Assessments']
      },
      {
        title: 'Developer Resources',
        icon: <FileText className="w-4 h-4" />,
        items: ['Code Libraries', 'Best Practices', 'Architecture Guides', 'Sample Projects', 'Reference Materials']
      }
    ],
    Company: [
      'About Us', 'Our Team', 'Careers', 'Press', 'Investors',
      'Partners', 'Contact', 'Legal', 'Privacy Policy',
      {
        title: 'Company Info',
        icon: <Info className="w-4 h-4" />,
        items: ['Mission & Vision', 'Company History', 'Leadership Team', 'Awards & Recognition', 'Corporate Social Responsibility']
      }
    ]
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleNavClick = (path) => {
    if (isOpen) {
      setOpen(false);
      document.body.style.overflow = 'auto';
    }
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    if (path) {
      navigate(path);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMouseEnter = (item) => {
    setActiveDropdown(item);
    setActiveSubDropdown(null);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubMouseEnter = (subItem) => {
    setActiveSubDropdown(subItem);
  };

  const navItems = ['Products', 'Solutions', 'Industries', 'Developers', 'Customers', 'Resources', 'Company'];

  const renderDropdownContent = (item) => {
    const data = dropdownData[item];
    
    if (item === 'Products' || item === 'Solutions' || item === 'Industries' || item === 'Customers' || item === 'Resources') {
      return (
        <div className="py-4">
          {data.map((category, index) => {
            // Handle objects with title and items
            if (typeof category === 'object' && category.title) {
              return (
                <div 
                  key={index}
                  className="relative group/sub"
                  onMouseEnter={() => handleSubMouseEnter(category.title)}
                >
                  <div className="flex items-center justify-between px-6 py-3 text-sm text-white/80 hover:text-sky-400 hover:bg-white/5 transition-all duration-200 cursor-pointer">
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  
                  {/* Sub-dropdown */}
                  <div 
                    className={`absolute left-full top-0 w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl ml-2 transition-all duration-300 ease-out ${
                      activeSubDropdown === category.title 
                        ? 'opacity-100 visible translate-x-0' 
                        : 'opacity-0 invisible -translate-x-4'
                    }`}
                  >
                    <div className="py-4">
                      {category.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-6 py-3 text-sm text-white/70 hover:text-sky-400 hover:bg-white/5 transition-all duration-200"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick();
                          }}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    } else if (item === 'Company') {
      return (
        <div className="py-4">
          {data.map((link, index) => {
            // Handle objects with title and items for Company
            if (typeof link === 'object' && link.title) {
              return (
                <div 
                  key={index}
                  className="relative group/sub"
                  onMouseEnter={() => handleSubMouseEnter(link.title)}
                >
                  <div className="flex items-center justify-between px-6 py-3 text-sm text-white/80 hover:text-sky-400 hover:bg-white/5 transition-all duration-200 cursor-pointer">
                    <div className="flex items-center gap-3">
                      {link.icon}
                      <span>{link.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  
                  {/* Sub-dropdown */}
                  <div 
                    className={`absolute left-full top-0 w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl ml-2 transition-all duration-300 ease-out ${
                      activeSubDropdown === link.title 
                        ? 'opacity-100 visible translate-x-0' 
                        : 'opacity-0 invisible -translate-x-4'
                    }`}
                  >
                    <div className="py-4">
                      {link.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-6 py-3 text-sm text-white/70 hover:text-sky-400 hover:bg-white/5 transition-all duration-200"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick();
                          }}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              // Handle regular string items
              return (
                <a
                  key={index}
                  href="#"
                  className="block px-6 py-3 text-sm text-white/80 hover:text-sky-400 hover:bg-white/5 transition-all duration-200 ease-out relative overflow-hidden group/item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick();
                  }}
                >
                  <span className="relative z-10">{link}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-300 ease-out"></div>
                </a>
              );
            }
          })}
        </div>
      );
    } else {
      // Handle simple arrays (like Developers)
      return (
        <div className="py-4">
          {data.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block px-6 py-3 text-sm text-white/80 hover:text-sky-400 hover:bg-white/5 transition-all duration-200 ease-out relative overflow-hidden group/item"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick();
              }}
            >
              <span className="relative z-10">{link}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-300 ease-out"></div>
            </a>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-gray-800 lg:bg-n-8/90 lg:backdrop-blur-sm ${
      isOpen ? "bg-black" : "bg-black/90 backdrop-blur-sm"
    }`}>
      <header className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-16 border-b border-white/20">
        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/" onClick={() => handleNavClick()}>
          <div className="flex items-center">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-52" 
          />
        </div>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden xl:flex items-center gap-6 text-white text-sm relative">
          {navItems.map((item) => (
            <li 
              key={item}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to={`/${item.toLowerCase()}`}
                className="px-6 py-6 lg:text-xs lg:font-semibold hover:text-sky-400 rounded-md cursor-pointer transition-colors xl:px-12 block"
                onClick={(e) => {
                  if (item === 'Products' || item === 'Solutions' || item === 'Industries' || item === 'Customers' || item === 'Resources' || item === 'Company') {
                    e.preventDefault();
                  }
                }}
              >
                {item}
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 min-w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl transition-all duration-300 ease-out ${
                  activeDropdown === item 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-4'
                }`}
                style={{
                  transformOrigin: 'top center'
                }}
              >
                {renderDropdownContent(item)}
              </div>
            </li>
          ))}
        </ul>

        <div className="relative hidden md:flex items-center gap-9">  
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search..."
            className="py-2 pl-10 pr-4 border border-white/30 rounded-xl bg-white/20 focus:bg-white/40 transition-all text-white placeholder-white/60"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">
            🔍
          </div>
        </div>

        <div className="xl:hidden cursor-pointer text-white">
          <button onClick={toggleMenu} className="flex flex-col gap-1">
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-40 bg-black/90 backdrop-blur-md">
          <ul className="w-full flex flex-col items-center gap-4 font-medium text-base py-4 shadow-md transition-all duration-300">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <div
                  onClick={() => setActiveDropdown(activeDropdown === item ? null : item)}
                  className="w-full text-center px-6 py-6 hover:text-sky-400 transition-colors cursor-pointer flex items-center justify-center gap-2 text-white"
                >
                  {item}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Mobile Dropdown */}
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  activeDropdown === item ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-white/5 mx-4 rounded-lg mb-2">
                    {(item === 'Products' || item === 'Solutions' || item === 'Industries' || item === 'Customers' || item === 'Resources') ? (
                      dropdownData[item].map((category, index) => {
                        if (typeof category === 'object' && category.title) {
                          return (
                            <div key={index}>
                              <div 
                                className="flex items-center justify-between px-6 py-3 text-sm text-white/70 hover:text-sky-400 transition-colors border-b border-white/10 cursor-pointer"
                                onClick={() => setActiveSubDropdown(activeSubDropdown === category.title ? null : category.title)}
                              >
                                <div className="flex items-center gap-3">
                                  {category.icon}
                                  <span>{category.title}</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubDropdown === category.title ? 'rotate-180' : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 ${
                                activeSubDropdown === category.title ? 'max-h-64' : 'max-h-0'
                              }`}>
                                {category.items.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href="#"
                                    className="block px-12 py-2 text-xs text-white/60 hover:text-sky-400 transition-colors"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleNavClick();
                                    }}
                                  >
                                    {subItem}
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })
                    ) : item === 'Company' ? (
                      dropdownData[item].map((link, index) => {
                        if (typeof link === 'object' && link.title) {
                          return (
                            <div key={index}>
                              <div 
                                className="flex items-center justify-between px-6 py-3 text-sm text-white/70 hover:text-sky-400 transition-colors border-b border-white/10 cursor-pointer"
                                onClick={() => setActiveSubDropdown(activeSubDropdown === link.title ? null : link.title)}
                              >
                                <div className="flex items-center gap-3">
                                  {link.icon}
                                  <span>{link.title}</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubDropdown === link.title ? 'rotate-180' : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 ${
                                activeSubDropdown === link.title ? 'max-h-64' : 'max-h-0'
                              }`}>
                                {link.items.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href="#"
                                    className="block px-12 py-2 text-xs text-white/60 hover:text-sky-400 transition-colors"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleNavClick();
                                    }}
                                  >
                                    {subItem}
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <a
                              key={index}
                              href="#"
                              className="block px-6 py-3 text-sm text-white/70 hover:text-sky-400 transition-colors border-b border-white/10 last:border-b-0"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick();
                              }}
                            >
                              {link}
                            </a>
                          );
                        }
                      })
                    ) : (
                      dropdownData[item].map((link, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-6 py-3 text-sm text-white/70 hover:text-sky-400 transition-colors border-b border-white/10 last:border-b-0"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick();
                          }}
                        >
                          {link}
                        </a>
                      ))
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;