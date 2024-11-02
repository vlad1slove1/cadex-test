import { ContentKey, Path } from '@/lib/enums';
import util from '@/lib/util';
import { CardData } from '@/types/cardData';
import { NavItem } from '@/styles/navItem';
import { ContactItem } from '@/types/contactItem';
import { Home, Mail, Phone } from '@/components/Icons';
import { OpenGraph } from '@/types/openGraph';

type Props = {
    name: string;
    description: string;
    content: Map<ContentKey, string>;
    cards: CardData[];
    navigation: NavItem[];
    contacts: ContactItem[];
    openGraph: OpenGraph;
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
        title: 'Important Inc.',
        description: "Hello, we're Important Inc. 👋 We're creating sites on next.",
        url: 'https://cadex-test-self.vercel.app/',
        siteName: 'Important Inc.',
        type: 'website',
        images: [
            {
                url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
                secureUrl:
                    'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
                width: '1200',
                height: '630',
                alt: 'Preview image for Important Inc.',
            },
        ],
    },
};

export default siteConfig;
