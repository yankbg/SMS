/**
 * Jeu d'icônes SVG en ligne, dans le style des SVG déjà présents dans les pages
 * (contour, viewBox 24x24, `currentColor`). Remplace les emojis utilisés
 * auparavant comme icônes : la couleur suit celle du texte du conteneur et la
 * taille se règle par `className` (ex. `w-10 h-10 text-white`).
 */
const Svg = ({className = "w-6 h-6", children}) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
    >
        {children}
    </svg>
);

/* --- Métiers / services --- */

export const HardHatIcon = (props) => (
    <Svg {...props}>
        <path d="M3 15.5h18a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V16.5a1 1 0 0 1 1-1z"/>
        <path d="M10 10.5V5.5A1.5 1.5 0 0 1 11.5 4h1a1.5 1.5 0 0 1 1.5 1.5v5"/>
        <path d="M4.5 15.5v-3A5.5 5.5 0 0 1 10 7"/>
        <path d="M14 7a5.5 5.5 0 0 1 5.5 5.5v3"/>
    </Svg>
);

export const CraneIcon = (props) => (
    <Svg {...props}>
        <path d="M7 20.5V4.5"/>
        <path d="M4 20.5h6"/>
        <path d="M3 4.5h18"/>
        <path d="M3 4.5v2.5h2.5"/>
        <path d="M16.5 4.5v5"/>
        <path d="M14.75 9.5h3.5v3.5h-3.5z"/>
    </Svg>
);

export const ExcavatorIcon = (props) => (
    <Svg {...props}>
        <path d="M4.5 16.5v-4a1 1 0 0 1 1-1H10a1 1 0 0 1 1 1v4"/>
        <path d="M10 12l3.5-5 5 3.5"/>
        <path d="M17 9.5l3 2.5-1.5 3-3.5-1.5z"/>
        <path d="M3 19.5h10"/>
        <circle cx="5.5" cy="19.5" r="1.6"/>
        <circle cx="11" cy="19.5" r="1.6"/>
    </Svg>
);

export const WheelLoaderIcon = (props) => (
    <Svg {...props}>
        <path d="M9.5 16.5v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5"/>
        <path d="M9.5 13.5L6 15.5"/>
        <path d="M2.5 12.5v5h3.5"/>
        <path d="M6 15.5v-4"/>
        <circle cx="11.5" cy="18.5" r="2.2"/>
        <circle cx="17" cy="18.5" r="2.2"/>
    </Svg>
);

export const TruckIcon = (props) => (
    <Svg {...props}>
        <path d="M2.5 16.5V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10.5"/>
        <path d="M14.5 9.5h3.6a1 1 0 0 1 .8.4l2.3 3.1a1 1 0 0 1 .3.6v2.9"/>
        <path d="M2.5 18.5h2"/>
        <path d="M9 18.5h6"/>
        <path d="M19.5 18.5h2"/>
        <circle cx="6.75" cy="18.5" r="2.2"/>
        <circle cx="17.25" cy="18.5" r="2.2"/>
    </Svg>
);

export const DumpTruckIcon = (props) => (
    <Svg {...props}>
        <path d="M8.5 14.5L10 6.5l10.5 2-1.3 6z"/>
        <path d="M8.5 14.5H3V10h3.2l2.3 3.3z"/>
        <path d="M9 18.5h6"/>
        <circle cx="6.5" cy="18.5" r="2.1"/>
        <circle cx="17.5" cy="18.5" r="2.1"/>
    </Svg>
);

export const CartIcon = (props) => (
    <Svg {...props}>
        <path d="M2 3h2.5l2.4 11a1.8 1.8 0 0 0 1.8 1.4h8.4a1.8 1.8 0 0 0 1.8-1.4L21 7H6"/>
        <circle cx="9" cy="19.5" r="1.6"/>
        <circle cx="17.5" cy="19.5" r="1.6"/>
    </Svg>
);

export const ChartIcon = (props) => (
    <Svg {...props}>
        <path d="M3.5 20.5h17"/>
        <path d="M7 20.5v-6"/>
        <path d="M12 20.5v-11"/>
        <path d="M17 20.5v-8"/>
    </Svg>
);

export const PartnershipIcon = (props) => (
    <Svg {...props}>
        <circle cx="8.75" cy="12" r="5.75"/>
        <circle cx="15.25" cy="12" r="5.75"/>
    </Svg>
);

export const CogIcon = (props) => (
    <Svg {...props}>
        <circle cx="12" cy="12" r="2.75"/>
        <circle cx="12" cy="12" r="7"/>
        <path d="M12 5V2.5"/>
        <path d="M12 19v2.5"/>
        <path d="M5 12H2.5"/>
        <path d="M19 12h2.5"/>
        <path d="M7.05 7.05L5.3 5.3"/>
        <path d="M16.95 16.95l1.75 1.75"/>
        <path d="M16.95 7.05l1.75-1.75"/>
        <path d="M7.05 16.95L5.3 18.7"/>
    </Svg>
);

export const LeafIcon = (props) => (
    <Svg {...props}>
        <path d="M20.5 3.5c-9.5 0-16 6.3-16 14.5 9.5 0 16-5.5 16-14.5z"/>
        <path d="M4.5 20.5C7.5 13 12.5 8.5 19 6"/>
    </Svg>
);

export const GlobeIcon = (props) => (
    <Svg {...props}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M3 12h18"/>
        <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>
    </Svg>
);

/* --- Matériel de précision --- */

export const RulerIcon = (props) => (
    <Svg {...props}>
        <path d="M15.5 2.5l6 6-13 13-6-6z"/>
        <path d="M6.5 11.5l2.5 2.5"/>
        <path d="M10 8l2.5 2.5"/>
        <path d="M13.5 4.5L16 7"/>
    </Svg>
);

export const SetSquareIcon = (props) => (
    <Svg {...props}>
        <path d="M4 3.5v17h17z"/>
        <path d="M7.5 10v7.5H15"/>
    </Svg>
);

export const ConeIcon = (props) => (
    <Svg {...props}>
        <path d="M12 3l7 17.5H5z"/>
        <path d="M9.2 13h5.6"/>
        <path d="M7.9 16.5h8.2"/>
        <path d="M3 20.5h18"/>
    </Svg>
);

export const HammerIcon = (props) => (
    <Svg {...props}>
        <path d="M13 3.5L20.5 11l-2.5 2.5L10.5 6z"/>
        <path d="M11.5 8.5l-8 8a2 2 0 0 0 2.8 2.8l8-8"/>
    </Svg>
);

export const SatelliteIcon = (props) => (
    <Svg {...props}>
        <path d="M4 10a7.31 7.31 0 0 0 10 10z"/>
        <path d="M9 15l3-3"/>
        <path d="M17 13a6 6 0 0 0-6-6"/>
        <path d="M21 13A10 10 0 0 0 11 3"/>
    </Svg>
);

export const CameraIcon = (props) => (
    <Svg {...props}>
        <path d="M3 8.5a2 2 0 0 1 2-2h1.8l1.4-2h7.6l1.4 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <circle cx="12" cy="13" r="3.5"/>
    </Svg>
);

export const BoltIcon = (props) => (
    <Svg {...props}>
        <path d="M13 2L4.5 13.5h6L10 22l9-12h-6z"/>
    </Svg>
);

/* --- Matériel roulant --- */

export const VanIcon = (props) => (
    <Svg {...props}>
        <path d="M2.5 16.5v-4.2c0-.5.2-1 .6-1.4l3.4-3.4c.4-.4.9-.6 1.4-.6h7c.5 0 1 .2 1.4.6l3.4 3.4c.4.4.6.9.6 1.4v4.2"/>
        <path d="M7.5 7.5V11h13"/>
        <path d="M9 18.5h6"/>
        <circle cx="6.5" cy="18.5" r="2.1"/>
        <circle cx="17.5" cy="18.5" r="2.1"/>
    </Svg>
);

export const CarIcon = (props) => (
    <Svg {...props}>
        <path d="M3 13.5l1.9-5.3A2 2 0 0 1 6.8 6.9h10.4a2 2 0 0 1 1.9 1.3L21 13.5v3.5H3z"/>
        <path d="M3 13.5h18"/>
        <circle cx="7" cy="17.5" r="2"/>
        <circle cx="17" cy="17.5" r="2"/>
    </Svg>
);

export const MotorcycleIcon = (props) => (
    <Svg {...props}>
        <circle cx="5" cy="16.5" r="3.5"/>
        <circle cx="19" cy="16.5" r="3.5"/>
        <path d="M5 16.5l3.5-5"/>
        <path d="M19 16.5l-3.5-5.5"/>
        <path d="M12.5 7.5h3.5"/>
        <path d="M8 11.5h5"/>
        <path d="M9.5 13h4.5v2.5H9.5z"/>
    </Svg>
);

export const PickupIcon = (props) => (
    <Svg {...props}>
        <path d="M2.5 16.5V11h6.5V7.5h4.3c.3 0 .6.2.8.4l2.4 3.1H21v5.5"/>
        <path d="M9 18.5h6"/>
        <circle cx="6.5" cy="18.5" r="2.1"/>
        <circle cx="17.5" cy="18.5" r="2.1"/>
    </Svg>
);

/* --- Contact / navigation --- */

export const MapPinIcon = (props) => (
    <Svg {...props}>
        <path d="M12 21.5s7.5-6.4 7.5-11.5a7.5 7.5 0 0 0-15 0c0 5.1 7.5 11.5 7.5 11.5z"/>
        <circle cx="12" cy="10" r="2.75"/>
    </Svg>
);

export const BuildingIcon = (props) => (
    <Svg {...props}>
        <path d="M4 21V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 16 5v16"/>
        <path d="M16 10h3.5A1.5 1.5 0 0 1 21 11.5V21"/>
        <path d="M2.5 21h19"/>
        <path d="M7.5 7.5h2"/>
        <path d="M11 7.5h2"/>
        <path d="M7.5 11.5h2"/>
        <path d="M11 11.5h2"/>
        <path d="M7.5 15.5h2"/>
        <path d="M11 15.5h2"/>
    </Svg>
);

export const MailIcon = (props) => (
    <Svg {...props}>
        <path d="M2.5 7a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/>
        <path d="M3 7.5l9 6.5 9-6.5"/>
    </Svg>
);

export const PhoneIcon = (props) => (
    <Svg {...props}>
        <path d="M21.5 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.6 4.2 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.6 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>
    </Svg>
);

export const HomeIcon = (props) => (
    <Svg {...props}>
        <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20z"/>
        <path d="M9.5 21.5v-6h5v6"/>
    </Svg>
);

export const WrenchIcon = (props) => (
    <Svg {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94L14.7 6.3z"/>
    </Svg>
);

export const ArrowRightIcon = (props) => (
    <Svg {...props}>
        <path d="M4 12h16"/>
        <path d="M14 6l6 6-6 6"/>
    </Svg>
);
