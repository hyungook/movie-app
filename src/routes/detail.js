import React from 'react';

class Detail extends React.Component {

    componentDidMount() {
        const {location, history} = this.props;
        console.log(this.props);
        // 선택된 영화가 없으면 history를 이용해 home으로 리다이렉트
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        // return (
        //     <span>{location.state.title}</span>
        // )
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;