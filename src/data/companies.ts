import { Company } from '../types/company';

const companies: Company[] = [
  {
    id: 'creative-contracting',
    nameKey: 'companies.creativeContracting',
    descriptionKey: 'companies.creativeContracting.description',
    color: 'nadara',
    gradientClass: 'bg-gradient-to-r from-nadara-500 to-nadara-900',
    logoIcon: 'Building2',
    heroImage: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
    services: [
      {
        titleKey: 'creativeContracting.services.construction.title',
        descriptionKey: 'creativeContracting.services.construction.description',
        icon: 'Building2',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
      },
      {
        titleKey: 'creativeContracting.services.design.title',
        descriptionKey: 'creativeContracting.services.design.description',
        icon: 'PenTool',
        image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg'
      },
      {
        titleKey: 'creativeContracting.services.renovation.title',
        descriptionKey: 'creativeContracting.services.renovation.description',
        icon: 'Hammer',
        image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg'
      },
      {
        titleKey: 'creativeContracting.services.management.title',
        descriptionKey: 'creativeContracting.services.management.description',
        icon: 'ClipboardList',
        image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'creativeContracting.features.quality.title',
        descriptionKey: 'creativeContracting.features.quality.description',
        icon: 'Shield'
      },
      {
        titleKey: 'creativeContracting.features.innovation.title',
        descriptionKey: 'creativeContracting.features.innovation.description',
        icon: 'Lightbulb'
      },
      {
        titleKey: 'creativeContracting.features.sustainability.title',
        descriptionKey: 'creativeContracting.features.sustainability.description',
        icon: 'Leaf'
      }
    ],
    stats: [
      {
        number: '300+',
        labelKey: 'creativeContracting.stats.projects',
        icon: 'Building'
      },
      {
        number: '150+',
        labelKey: 'creativeContracting.stats.clients',
        icon: 'Users'
      },
      {
        number: '12+',
        labelKey: 'creativeContracting.stats.years',
        icon: 'Clock'
      }
    ],
    testimonials: [
      {
        authorKey: 'creativeContracting.testimonial.author1',
        roleKey: 'creativeContracting.testimonial.role1',
        contentKey: 'creativeContracting.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'creativeContracting.testimonial.author2',
        roleKey: 'creativeContracting.testimonial.role2',
        contentKey: 'creativeContracting.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'creativeContracting.testimonial.author3',
        roleKey: 'creativeContracting.testimonial.role3',
        contentKey: 'creativeContracting.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'creativeContracting.testimonial.author4',
        roleKey: 'creativeContracting.testimonial.role4',
        contentKey: 'creativeContracting.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ],
    projects: [
      {
        titleKey: 'creativeContracting.projects.project1.title',
        descriptionKey: 'creativeContracting.projects.project1.description',
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        category: 'Residential'
      },
      {
        titleKey: 'creativeContracting.projects.project2.title',
        descriptionKey: 'creativeContracting.projects.project2.description',
        image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg',
        category: 'Commercial'
      }
    ]
  },
  {
    id: 'plus-hundred',
    nameKey: 'companies.plusHundred',
    descriptionKey: 'companies.plusHundred.description',
    color: 'plusHundred',
    gradientClass: 'bg-gradient-to-r from-plusHundred-500 to-plusHundred-900',
    logoIcon: 'LineChart',
    heroImage: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg',
    services: [
      {
        titleKey: 'plusHundred.services.investment.title',
        descriptionKey: 'plusHundred.services.investment.description',
        icon: 'TrendingUp',
        image: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg'
      },
      {
        titleKey: 'plusHundred.services.advisory.title',
        descriptionKey: 'plusHundred.services.advisory.description',
        icon: 'Briefcase',
        image: 'https://images.pexels.com/photos/7567436/pexels-photo-7567436.jpeg'
      },
      {
        titleKey: 'plusHundred.services.wealth.title',
        descriptionKey: 'plusHundred.services.wealth.description',
        icon: 'Wallet',
        image: 'https://images.pexels.com/photos/7567438/pexels-photo-7567438.jpeg'
      },
      {
        titleKey: 'plusHundred.services.research.title',
        descriptionKey: 'plusHundred.services.research.description',
        icon: 'Search',
        image: 'https://images.pexels.com/photos/7567442/pexels-photo-7567442.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'plusHundred.features.expertise.title',
        descriptionKey: 'plusHundred.features.expertise.description',
        icon: 'Award'
      },
      {
        titleKey: 'plusHundred.features.innovation.title',
        descriptionKey: 'plusHundred.features.innovation.description',
        icon: 'Lightbulb'
      },
      {
        titleKey: 'plusHundred.features.security.title',
        descriptionKey: 'plusHundred.features.security.description',
        icon: 'Shield'
      }
    ],
    stats: [
      {
        number: '1B+',
        labelKey: 'plusHundred.stats.managed',
        icon: 'DollarSign'
      },
      {
        number: '80+',
        labelKey: 'plusHundred.stats.clients',
        icon: 'Users'
      },
      {
        number: '25%',
        labelKey: 'plusHundred.stats.returns',
        icon: 'TrendingUp'
      }
    ],
    testimonials: [
      {
        authorKey: 'plusHundred.testimonial.author1',
        roleKey: 'plusHundred.testimonial.role1',
        contentKey: 'plusHundred.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'plusHundred.testimonial.author2',
        roleKey: 'plusHundred.testimonial.role2',
        contentKey: 'plusHundred.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'plusHundred.testimonial.author3',
        roleKey: 'plusHundred.testimonial.role3',
        contentKey: 'plusHundred.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'plusHundred.testimonial.author4',
        roleKey: 'plusHundred.testimonial.role4',
        contentKey: 'plusHundred.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ]
  },
  {
    id: 'rakeeza-plus',
    nameKey: 'companies.rakeeza',
    descriptionKey: 'companies.rakeeza.description',
    color: 'rakeeza',
    gradientClass: 'bg-gradient-to-r from-rakeeza-500 to-rakeeza-900',
    logoIcon: 'Users',
    heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    services: [
      {
        titleKey: 'rakeeza.services.recruitment.title',
        descriptionKey: 'rakeeza.services.recruitment.description',
        icon: 'UserPlus',
        image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
      },
      {
        titleKey: 'rakeeza.services.training.title',
        descriptionKey: 'rakeeza.services.training.description',
        icon: 'GraduationCap',
        image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg'
      },
      {
        titleKey: 'rakeeza.services.consulting.title',
        descriptionKey: 'rakeeza.services.consulting.description',
        icon: 'LineChart',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
      },
      {
        titleKey: 'rakeeza.services.development.title',
        descriptionKey: 'rakeeza.services.development.description',
        icon: 'Target',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'rakeeza.features.expertise.title',
        descriptionKey: 'rakeeza.features.expertise.description',
        icon: 'Award'
      },
      {
        titleKey: 'rakeeza.features.innovation.title',
        descriptionKey: 'rakeeza.features.innovation.description',
        icon: 'Lightbulb'
      },
      {
        titleKey: 'rakeeza.features.quality.title',
        descriptionKey: 'rakeeza.features.quality.description',
        icon: 'Shield'
      }
    ],
    stats: [
      {
        number: '1000+',
        labelKey: 'rakeeza.stats.placements',
        icon: 'UserCheck'
      },
      {
        number: '200+',
        labelKey: 'rakeeza.stats.clients',
        icon: 'Building'
      },
      {
        number: '95%',
        labelKey: 'rakeeza.stats.satisfaction',
        icon: 'ThumbsUp'
      }
    ],
    testimonials: [
      {
        authorKey: 'rakeeza.testimonial.author1',
        roleKey: 'rakeeza.testimonial.role1',
        contentKey: 'rakeeza.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'rakeeza.testimonial.author2',
        roleKey: 'rakeeza.testimonial.role2',
        contentKey: 'rakeeza.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'rakeeza.testimonial.author3',
        roleKey: 'rakeeza.testimonial.role3',
        contentKey: 'rakeeza.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'rakeeza.testimonial.author4',
        roleKey: 'rakeeza.testimonial.role4',
        contentKey: 'rakeeza.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ]
  },
  {
    id: 'value-plus-projects',
    nameKey: 'companies.valuePlusProjects',
    descriptionKey: 'companies.valuePlusProjects.description',
    color: 'primary',
    gradientClass: 'bg-gradient-to-r from-primary-500 to-primary-900',
    logoIcon: 'Building2',
    heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    services: [
      {
        titleKey: 'valuePlusProjects.services.projectManagement.title',
        descriptionKey: 'valuePlusProjects.services.projectManagement.description',
        icon: 'ClipboardList',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
      },
      {
        titleKey: 'valuePlusProjects.services.consulting.title',
        descriptionKey: 'valuePlusProjects.services.consulting.description',
        icon: 'LineChart',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'valuePlusProjects.features.expertise.title',
        descriptionKey: 'valuePlusProjects.features.expertise.description',
        icon: 'Award'
      },
      {
        titleKey: 'valuePlusProjects.features.innovation.title',
        descriptionKey: 'valuePlusProjects.features.innovation.description',
        icon: 'Lightbulb'
      }
    ],
    stats: [
      {
        number: '500+',
        labelKey: 'valuePlusProjects.stats.projects',
        icon: 'Building'
      },
      {
        number: '100+',
        labelKey: 'valuePlusProjects.stats.clients',
        icon: 'Users'
      }
    ],
    testimonials: [
      {
        authorKey: 'valuePlusProjects.testimonial.author1',
        roleKey: 'valuePlusProjects.testimonial.role1',
        contentKey: 'valuePlusProjects.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'valuePlusProjects.testimonial.author2',
        roleKey: 'valuePlusProjects.testimonial.role2',
        contentKey: 'valuePlusProjects.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'valuePlusProjects.testimonial.author3',
        roleKey: 'valuePlusProjects.testimonial.role3',
        contentKey: 'valuePlusProjects.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'valuePlusProjects.testimonial.author4',
        roleKey: 'valuePlusProjects.testimonial.role4',
        contentKey: 'valuePlusProjects.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ]
  },
  {
    id: 'khuzam-najd',
    nameKey: 'companies.khuzam',
    descriptionKey: 'companies.khuzam.description',
    color: 'khuzam',
    gradientClass: 'bg-gradient-to-r from-khuzam-500 to-khuzam-900',
    logoIcon: 'Building2',
    heroImage: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    services: [
      {
        titleKey: 'khuzam.services.construction.title',
        descriptionKey: 'khuzam.services.construction.description',
        icon: 'Building2',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
      },
      {
        titleKey: 'khuzam.services.design.title',
        descriptionKey: 'khuzam.services.design.description',
        icon: 'PenTool',
        image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg'
      },
      {
        titleKey: 'khuzam.services.renovation.title',
        descriptionKey: 'khuzam.services.renovation.description',
        icon: 'Hammer',
        image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg'
      },
      {
        titleKey: 'khuzam.services.management.title',
        descriptionKey: 'khuzam.services.management.description',
        icon: 'ClipboardList',
        image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'khuzam.features.quality.title',
        descriptionKey: 'khuzam.features.quality.description',
        icon: 'Shield'
      },
      {
        titleKey: 'khuzam.features.innovation.title',
        descriptionKey: 'khuzam.features.innovation.description',
        icon: 'Lightbulb'
      },
      {
        titleKey: 'khuzam.features.sustainability.title',
        descriptionKey: 'khuzam.features.sustainability.description',
        icon: 'Leaf'
      }
    ],
    stats: [
      {
        number: '300+',
        labelKey: 'khuzam.stats.projects',
        icon: 'Building'
      },
      {
        number: '150+',
        labelKey: 'khuzam.stats.clients',
        icon: 'Users'
      },
      {
        number: '12+',
        labelKey: 'khuzam.stats.years',
        icon: 'Clock'
      }
    ],
    testimonials: [
      {
        authorKey: 'khuzam.testimonial.author1',
        roleKey: 'khuzam.testimonial.role1',
        contentKey: 'khuzam.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'khuzam.testimonial.author2',
        roleKey: 'khuzam.testimonial.role2',
        contentKey: 'khuzam.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'khuzam.testimonial.author3',
        roleKey: 'khuzam.testimonial.role3',
        contentKey: 'khuzam.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'khuzam.testimonial.author4',
        roleKey: 'khuzam.testimonial.role4',
        contentKey: 'khuzam.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ]
  },
  {
    id: 'nadara-investment',
    nameKey: 'companies.nadaraInvestment',
    descriptionKey: 'companies.nadaraInvestment.description',
    color: 'nadara',
    gradientClass: 'bg-gradient-to-r from-nadara-500 to-nadara-900',
    logoIcon: 'TrendingUp',
    heroImage: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg',
    services: [
      {
        titleKey: 'nadaraInvestment.services.investment.title',
        descriptionKey: 'nadaraInvestment.services.investment.description',
        icon: 'TrendingUp',
        image: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg'
      },
      {
        titleKey: 'nadaraInvestment.services.advisory.title',
        descriptionKey: 'nadaraInvestment.services.advisory.description',
        icon: 'Briefcase',
        image: 'https://images.pexels.com/photos/7567436/pexels-photo-7567436.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'nadaraInvestment.features.expertise.title',
        descriptionKey: 'nadaraInvestment.features.expertise.description',
        icon: 'Award'
      },
      {
        titleKey: 'nadaraInvestment.features.innovation.title',
        descriptionKey: 'nadaraInvestment.features.innovation.description',
        icon: 'Lightbulb'
      }
    ],
    stats: [
      {
        number: '1B+',
        labelKey: 'nadaraInvestment.stats.managed',
        icon: 'DollarSign'
      },
      {
        number: '80+',
        labelKey: 'nadaraInvestment.stats.clients',
        icon: 'Users'
      }
    ],
    testimonials: [
      {
        authorKey: 'nadaraInvestment.testimonial.author1',
        roleKey: 'nadaraInvestment.testimonial.role1',
        contentKey: 'nadaraInvestment.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'nadaraInvestment.testimonial.author2',
        roleKey: 'nadaraInvestment.testimonial.role2',
        contentKey: 'nadaraInvestment.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'nadaraInvestment.testimonial.author3',
        roleKey: 'nadaraInvestment.testimonial.role3',
        contentKey: 'nadaraInvestment.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'nadaraInvestment.testimonial.author4',
        roleKey: 'nadaraInvestment.testimonial.role4',
        contentKey: 'nadaraInvestment.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ]
  },
  {
    id: 'ejaba-consulting',
    nameKey: 'companies.ejaba',
    descriptionKey: 'companies.ejaba.description',
    color: 'ejaba',
    gradientClass: 'bg-gradient-to-r from-ejaba-500 to-ejaba-900',
    logoIcon: 'Users',
    heroImage: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    services: [
      {
        titleKey: 'ejaba.services.consulting.title',
        descriptionKey: 'ejaba.services.consulting.description',
        icon: 'LineChart',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
      },
      {
        titleKey: 'ejaba.services.training.title',
        descriptionKey: 'ejaba.services.training.description',
        icon: 'GraduationCap',
        image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg'
      }
    ],
    features: [
      {
        titleKey: 'ejaba.features.expertise.title',
        descriptionKey: 'ejaba.features.expertise.description',
        icon: 'Award'
      },
      {
        titleKey: 'ejaba.features.innovation.title',
        descriptionKey: 'ejaba.features.innovation.description',
        icon: 'Lightbulb'
      }
    ],
    stats: [
      {
        number: '800+',
        labelKey: 'ejaba.stats.clients',
        icon: 'Users'
      },
      {
        number: '98%',
        labelKey: 'ejaba.stats.satisfaction',
        icon: 'ThumbsUp'
      }
    ],
    testimonials: [
      {
        authorKey: 'ejaba.testimonial.author1',
        roleKey: 'ejaba.testimonial.role1',
        contentKey: 'ejaba.testimonial.content1',
        image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5
      },
      {
        authorKey: 'ejaba.testimonial.author2',
        roleKey: 'ejaba.testimonial.role2',
        contentKey: 'ejaba.testimonial.content2',
        image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
        rating: 5
      },
      {
        authorKey: 'ejaba.testimonial.author3',
        roleKey: 'ejaba.testimonial.role3',
        contentKey: 'ejaba.testimonial.content3',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        rating: 5
      },
      {
        authorKey: 'ejaba.testimonial.author4',
        roleKey: 'ejaba.testimonial.role4',
        contentKey: 'ejaba.testimonial.content4',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        rating: 5
      }
    ]
  }
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export default companies;