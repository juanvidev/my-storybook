
import { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

const labelMeta: Meta<typeof MyLabel> = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
    },
}

export default labelMeta;

type Story = StoryObj<typeof MyLabel>;


export const Basic: Story = {
    args: {
        size: 'normal',
        allCaps: false,
        color: 'primary'
    }
}

export const AllCaps: Story = {
    args: {
        size: 'normal',
        allCaps: true,
        color: 'primary'
    }
}
export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary'
    }
}
export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary',
    }
}

export const CustomFontColor: Story = {
    args: {
        size: 'h1',
        fontColor: '#5517ac',
    },
};
