const VNFs = [{
        id: 1,
        type: "routers",
        name: "ISRv - 50 Mbps (Base)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 2,
        type: "routers",
        name: "ISRv - 100 Mbps (Base)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 3,
        type: "routers",
        name: "ISRv - 250 Mbps (Base)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 4,
        type: "routers",
        name: "ISRv - 500 Mbps (Base)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 5,
        type: "routers",
        name: "ISRv - 1 Gbps (Base)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 6,
        type: "routers",
        name: "ISRv - 50 Mbps (SEC)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 7,
        type: "routers",
        name: "ISRv - 100 Mbps (SEC)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 8,
        type: "routers",
        name: "ISRv - 250 Mbps (SEC)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 9,
        type: "routers",
        name: "ISRv - 500 Mbps (SEC)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 10,
        type: "routers",
        name: "ISRv - 1 Gbps (SEC)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 11,
        type: "routers",
        name: "ISRv - 50 Mbps (IWAN)",
        specs: {
            vcpu: 2,
            memory: 4,
            "disk": 8
        }
    },
    {
        id: 12,
        type: "routers",
        name: "ISRv - 100 Mbps (IWAN)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 13,
        type: "routers",
        name: "ISRv - 250 Mbps (IWAN)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 14,
        type: "routers",
        name: "ISRv - 500 Mbps (IWAN)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 15,
        type: "routers",
        name: "vEdge - 100 Mbps",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 16,
        type: "routers",
        name: "vEdge - 250 Mbps",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 17,
        type: "firewalls",
        name: "ASAv5 - 100 Mbps",
        specs: {
            vcpu: 1,
            memory: 1,
            disk: 8
        }
    },
    {
        id: 18,
        type: "firewalls",
        name: "ASAv10 - 1 Gbps",
        specs: {
            vcpu: 1,
            memory: 2,
            disk: 8
        }
    },
    {
        id: 19,
        type: "firewalls",
        name: "ASAv30 - 2 Gbps",
        specs: {
            vcpu: 4,
            memory: 8,
            disk: 16
        }
    },
    {
        id: 20,
        type: "vwaas",
        name: "vWAAS - 200 Connections",
        specs: {
            vcpu: 1,
            memory: 4,
            disk: 260
        }
    },
    {
        id: 21,
        type: "vwaas",
        name: "vWAAS - 750 Connections",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 500
        }
    },
    {
        id: 22,
        type: "firewalls",
        name: "NGFWv",
        specs: {
            vcpu: 4,
            memory: 8,
            disk: 50
        }
    },
    {
        id: 23,
        type: "thirdparty",
        name: "Windows (Small)",
        specs: {
            vcpu: 1,
            memory: 2,
            disk: 500
        }
    },
    {
        id: 24,
        type: "thirdparty",
        name: "Windows (Medium)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 1000
        }
    },
    {
        id: 25,
        type: "thirdparty",
        name: "Windows (Large)",
        specs: {
            vcpu: 4,
            memory: 8,
            disk: 1000
        }
    },
    {
        id: 26,
        type: "thirdparty",
        name: "Linux (XSmall)",
        specs: {
            vcpu: 1,
            memory: 1,
            disk: 50
        }
    },
    {
        id: 27,
        type: "thirdparty",
        name: "Linux (Small)",
        specs: {
            vcpu: 1,
            memory: 2,
            disk: 100
        }
    },
    {
        id: 28,
        type: "thirdparty",
        name: "Linux (Medium)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 200
        }
    },
    {
        id: 29,
        type: "thirdparty",
        name: "Linux (Large)",
        specs: {
            vcpu: 4,
            memory: 8,
            disk: 300
        }
    }
];

export default VNFs;
