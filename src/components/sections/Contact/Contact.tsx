import { FC } from 'react';
import { Mail, Linkedin, Github, LucideIcon } from 'lucide-react';
import { SOCIAL_LINKS } from '@constants/index';
import { getDelayClass } from '@utils/animationUtils';
import styles from './Contact.module.css';

interface ContactCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  value: string;
  href: string;
}

const Contact: FC = () => {
  const contactInfo: ContactCard[] = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Drop me a message',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Check out my code',
      value: 'github.com/DIMSGN',
      href: SOCIAL_LINKS.github,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: "Let's connect",
      value: 'Dimitris Siganos',
      href: SOCIAL_LINKS.linkedin,
    },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} fade-in-up`}>
          <h2 className="heading-futuristic" data-text="Get In Touch">Get In Touch</h2>
        </div>

        <div className={styles.cards}>
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className={`${styles.card} fade-in-up ${getDelayClass(index, 1)}`}
              >
                <a href={info.href} className={styles.cardLink}>
                  <div className={styles.icon}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{info.title}</h3>
                  <p className={styles.cardSubtitle}>{info.subtitle}</p>
                  <p className={styles.cardValue}>{info.value}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
