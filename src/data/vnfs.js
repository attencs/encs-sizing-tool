const VNFs = [
    {
        id: 1,
        type: "routers",
        name: "ISRv - 50 Mbps (WAN Foundation)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 2,
        type: "routers",
        name: "ISRv - 100 Mbps (WAN Foundation)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 3,
        type: "routers",
        name: "ISRv - 250 Mbps (WAN Foundation)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 4,
        type: "routers",
        name: "ISRv - 500 Mbps (WAN Foundation)",
        specs: {
            vcpu: 2,
            memory: 4,
            disk: 8
        }
    },
    {
        id: 5,
        type: "firewalls",
        name: "ASAv5 - 100 Mbps",
        specs: {
            vcpu: 1,
            memory: 1,
            disk: 8
        }
    },
    {
        id: 6,
        type: "firewalls",
        name: "ASAv10 - 1 Gbps",
        specs: {
            vcpu: 1,
            memory: 2,
            disk: 8
        }
    },
    {
        id: 7,
        type: "firewalls",
        name: "ASAv30 - 2 Gbps",
        specs: {
            vcpu: 4,
            memory: 8,
            disk: 16
        }
    }
];

export default VNFs;
