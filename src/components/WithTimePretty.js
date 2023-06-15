import dayjs from 'dayjs';

function WithTimePretty(Component) {
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);
    return function (props) {
        const date = dayjs(props.date).fromNow();
        return <Component {...props} date={date} />;
    };
}

export default WithTimePretty;
