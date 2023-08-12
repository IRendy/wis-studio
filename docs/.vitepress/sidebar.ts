const teams = [
    {
        text: '组别',
        link: '/teams',
        items: [
            {
            text: '电控组', 
            link: '/teams/electri',
            collapsed: true,
            items: [
                { text: 'C语言', link: '/teams/electri/c'},
                {
                    text: '芯片',
                    link: '/teams/electri/chip',
                    collapsed: true,
                    items: [
                        { text: '封装', link: '/teams/electri/chip/package'},
                        { text: '架构', link: '/teams/electri/chip/architecture'}
                    ]
                },
                {
                    text: '单片机',
                    link: '/teams/electri/mcu/',
                    items: [
                        { text: '51单片机', link: '/teams/electri/mcu/51'},
                        { text: 'STM32单片机', link: '/teams/electri/mcu/32'}
                    ]
                },                
                { text: 'Arduino', link: '/teams/electri/arduino'},
                { text: 'MicroPython', link: '/teams/electri/mpy'},
                { text: '工具', link: '/src'},
                { 
                    text: 'PCB',
                    link: '/teams/electri/pcb',
                    collapsed: true,
                    items: [
                        { text: '电路基础', link: '/teams/electri/pcb/circuit'},
                        { text: '焊接技术', link: '/teams/electri/pcb/connect'},
                    ]
                },

            ]
                
        },
            { text: '机械组', link: '/teams/machine' },
            { text: '文科组', link: '/teams/writer' }
        ]
    }
]

const studios = [
    {
        text: '工作室',
        items: [
            { text: '智能车创新工作室', link: '/studios/smartcar' },
            { text: '机器人创新工作室', link: '/studios/robot' },
            { text: '机械创新工作室', link: '/studios/machine' },
            { text: '智汇坊创新工作室', link: '/studios/writer' }
        ]
    }
]

export {teams, studios}