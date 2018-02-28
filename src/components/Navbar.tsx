import * as React from 'react';
import './Navbar.scss';
interface Props {
    navItems?: ReadonlyArray<string>;
}

interface State {
    activeIndex: number | null;
}

class Navbar extends React.Component<Props, State> {
    static defaultProps: Props = {
        navItems: []
    };
    setActive(index: number, e: React.SyntheticEvent<EventTarget>) {
        // let target = e.target as HTMLLIElement;
        this.setState({ activeIndex: index });
    }

    getActiveClass(index: number): string {
        if (this.state.activeIndex === index) {
            return 'active';
        }
        return '';
    }

    buildNavItems() {
        let listItems = null;
        if (this.props.navItems) {
            listItems = this.props.navItems.map(
                (label: string, index: number) => 
                    (
                        <li
                            className={'some-default-class ' + this.getActiveClass(index)}
                            key={label} 
                            onClick={this.setActive.bind(this, index)}
                        >{label}
                        </li>
                    )
                );
        }
        return (
            <ul>
                {listItems}
            </ul>
        );
    }

    componentWillMount() {
        this.state = { activeIndex: null };
    }

    render() {
        return (
            <nav className="navbar">
                {this.buildNavItems()}
            </nav>
        );
    }
}

export default Navbar;
