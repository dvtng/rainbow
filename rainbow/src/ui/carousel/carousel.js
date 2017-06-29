import React, { Component, Children } from 'react';
import styled from 'styled-components';

const Viewport = styled.div`
    overflow: hidden;
    width: ${props => props.width}px;
`;

const AllContent = styled.div`
    display: flex;
    transform: translateX(${props => -props.width * props.active}px);
    transition: 0.3s transform ease-out;
    width: ${props => props.width * props.count}px;
`;

const ContentWrapper = styled.div`width: ${props => props.width}px;`;

class Carousel extends Component {
    static defaultProps = {
        active: 0
    };

    state = {
        width: null
    };

    componentDidMount() {
        this.setState({
            width: this.container.getBoundingClientRect().width
        });
    }

    render() {
        const { children } = this.props;
        const { width } = this.state;
        const childrenCount = Children.count(children);
        return (
            <div ref={el => (this.container = el)}>
                <Viewport>
                    {width &&
                        childrenCount &&
                        <AllContent
                            width={width}
                            count={childrenCount}
                            active={this.props.active}
                        >
                            {children.map((child, i) =>
                                <ContentWrapper key={i} width={width}>
                                    {child}
                                </ContentWrapper>
                            )}
                        </AllContent>}
                </Viewport>
            </div>
        );
    }
}

export default styled(Carousel)`
    overflow: hidden;
`;
