import Mock from 'mockjs';

Mock.setup({
    timeout: '200-600'
});

let tab = Mock.mock({
    "data|10-30": [{
        name: '@cname',
        paragraph: "@paragraph(1, 3)",
        datetime: "@datetime",
    }],
});

export default {
    tab,
}

