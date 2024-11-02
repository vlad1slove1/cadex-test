import { ContentKey, Path } from '@/lib/enums';
import util from '@/lib/util';
import { Home, Mail, Phone } from '@/components/Icons';

import type { NavItem } from '@/styles/navItem';
import type { ContactItem } from '@/types/contactItem';
import type { CardData } from '@/types/cardData';
import type { OpenGraph, Twitter } from '@/types/socialMediaTag';

type Props = {
    name: string;
    description: string;
    content: Map<ContentKey, string>;
    cards: CardData[];
    navigation: NavItem[];
    contacts: ContactItem[];
    openGraph: OpenGraph;
    twitter: Twitter;
};

const siteConfig: Props = {
    name: 'Important Inc.',
    description:
        'Important Inc. showcases its offerings through a Next.js-based website, emphasizing speed and scalability',
    content: new Map([
        [ContentKey.LOGO_IMAGE_SRC, '/logo.png'],
        [ContentKey.LOGO_IMAGE_ALT, 'Important Inc. logo'],
        [ContentKey.SEND_MESSAGE_IMAGE_SRC, '/send_message.svg'],
        [ContentKey.SEND_MESSAGE_IMAGE_ALT, 'Send message image'],
        [ContentKey.YOUTUBE_VIDEO_LINK, 'dQw4w9WgXcQ'],
        [ContentKey.YOUTUBE_VIDEO_LABEL, 'Youtube embed video player'],
    ]),
    cards: [
        {
            src: 'https://nextui.org/images/hero-card.jpeg',
            alt: 'Woman listening to music',
            title: 'Item 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
        },
        {
            src: 'https://nextui.org/images/album-cover.png',
            alt: 'Album cover',
            title: 'Item 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
        },
        {
            src: 'https://nextui.org/images/card-example-4.jpeg',
            alt: 'Stars',
            title: 'Item 3',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
        },
        {
            src: 'https://nextui.org/images/card-example-3.jpeg',
            alt: 'Aloe flower',
            title: 'Item 4',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
        },
        {
            src: 'https://nextui.org/images/card-example-6.jpeg',
            alt: 'Camera',
            title: 'Item 5',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
        },
        {
            src: 'https://nextui.org/images/fruit-1.jpeg',
            alt: 'Sliced orange',
            title: 'Item 6',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
        },
    ],
    navigation: [
        { label: 'Home', href: Path.HOME },
        { label: 'Contacts', href: Path.CONTACT_PAGE },
    ],
    contacts: [
        { label: '123 Street, City Name', icon: Home },
        { label: 'contact@example.com', href: util.mailtoOrTel('contact@example.com'), icon: Mail },
        { label: '+1 234 567 890', href: util.mailtoOrTel('+1234567890'), icon: Phone },
    ],
    openGraph: {
        url: 'https://cadex-test-self.vercel.app/',
        type: 'website',
        title: 'Important Inc.',
        description: "Hello, we're Important Inc. 👋 We're creating sites on next.",
        image: 'https://nextui.org/images/hero-card.jpeg',
    },
    twitter: {
        url: 'https://cadex-test-self.vercel.app/',
        domain: 'cadex-test-self.vercel.app',
        title: 'Important Inc.',
        description: "Hello, we're Important Inc. 👋 We're creating sites on next.",
        image: 'https://nextui.org/images/hero-card.jpeg',
        card: 'summary',
    },
};

export default siteConfig;
