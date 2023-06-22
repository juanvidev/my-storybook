
import './MyLabel.css'

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



const MyLabel = ({
    labelName = "Label",
    size = "normal",
    color = "primary",
    allCaps = false,
    fontColor,
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
            {allCaps ? labelName.toUpperCase() : labelName}
        </span>
    )
};

export default MyLabel;
