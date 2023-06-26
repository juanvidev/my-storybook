import './MyLabel.css';
interface MyLabelProps {
    /**
    * Label contents
    */
    labelName: string;
    /**
    * How large should the label be?
    * @default normal
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Should the label be all caps?
     * @default false
     */
    allCaps?: boolean;
    /**
     * What color should the label be?
     * @default primary
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * What font color should the label be?
     * @default #5517ac
     */
    fontColor?: string;
}
export declare const MyLabel: ({ labelName, size, color, allCaps, fontColor, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
