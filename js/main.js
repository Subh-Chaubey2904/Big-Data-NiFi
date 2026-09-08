/* ============================================================
   MAIN — Login Logic & Demo Simulation
   ============================================================ */

/* ---- LOGIN ---- */

function initLogin() {
    const form = document.getElementById('login-form');
    const errorEl = document.getElementById('login-error');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === 'admin' && password === 'nifi123') {
            sessionStorage.setItem('nifi_authenticated', 'true');

            // Animate out
            const card = document.querySelector('.login-card');
            if (card) {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px) scale(0.97)';
            }

            setTimeout(function () {
                window.location.href = 'dashboard.html';
            }, 400);
        } else {
            // Show error
            if (errorEl) {
                errorEl.classList.add('show');
                errorEl.style.animation = 'none';
                errorEl.offsetHeight;
                errorEl.style.animation = 'shake 0.4s ease-out';
            }
        }
    });
}


/* ---- DEMO SIMULATION ---- */

const demoData = [
    { orderId: 'ORD001', customer: 'Rahul',  amount: '₹2,500',  city: 'Mumbai', type: 'Online'  },
    { orderId: 'ORD002', customer: 'Priya',  amount: '₹1,800',  city: 'Pune',   type: 'Online'  },
    { orderId: 'ORD003', customer: 'Amit',   amount: '₹4,200',  city: 'Delhi',  type: 'Offline' },
    { orderId: 'ORD004', customer: 'Neha',   amount: '₹3,200',  city: 'Mumbai', type: 'Online'  },
];

let demoRunning = false;
let demoTimeouts = [];

function initDemo() {
    renderDemoDataTable();
    renderDemoPipeline();

    const startBtn = document.getElementById('btn-start-flow');
    const resetBtn = document.getElementById('btn-reset-flow');

    if (startBtn) {
        startBtn.addEventListener('click', startDemoFlow);
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', resetDemo);
    }
}

function renderDemoDataTable() {
    const tbody = document.getElementById('demo-data-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    demoData.forEach(function (row) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.orderId}</td>
            <td>${row.customer}</td>
            <td>${row.amount}</td>
            <td>${row.city}</td>
            <td>${row.type}</td>`;
        tbody.appendChild(tr);
    });
}

function renderDemoPipeline() {
    // Pipeline is rendered in HTML; we just set initial states
    setAllNodesIdle();
}

function setAllNodesIdle() {
    document.querySelectorAll('.demo-node').forEach(function (n) {
        n.classList.remove('processing', 'completed');
        n.classList.add('idle');
        const status = n.querySelector('.node-status');
        if (status) status.textContent = 'IDLE';
    });
}

function setNodeState(nodeId, state) {
    const node = document.getElementById(nodeId);
    if (!node) return;

    node.classList.remove('idle', 'processing', 'completed');
    node.classList.add(state);

    const status = node.querySelector('.node-status');
    if (status) {
        status.textContent = state.toUpperCase();
    }
}

function addLogEntry(message) {
    const log = document.getElementById('activity-log');
    if (!log) return;

    const now = new Date();
    const time = now.toLocaleTimeString('en-IN', { hour12: false });

    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="timestamp">[${time}]</span> ${message}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}

function clearLog() {
    const log = document.getElementById('activity-log');
    if (log) log.innerHTML = '';
}

function highlightDataRow(index) {
    const rows = document.querySelectorAll('#demo-data-body tr');
    rows.forEach(function (r) { r.classList.remove('highlighted'); });
    if (rows[index]) rows[index].classList.add('highlighted');
}

function clearHighlights() {
    document.querySelectorAll('#demo-data-body tr').forEach(function (r) {
        r.classList.remove('highlighted');
    });
}

function moveFlowParticle(fromId, toId, duration) {
    return new Promise(function (resolve) {
        const from = document.getElementById(fromId);
        const to = document.getElementById(toId);
        const particle = document.getElementById('flow-particle');

        if (!from || !to || !particle) {
            resolve();
            return;
        }

        const container = document.getElementById('pipeline-area');
        const containerRect = container.getBoundingClientRect();
        const fromRect = from.getBoundingClientRect();
        const toRect = to.getBoundingClientRect();

        const startX = fromRect.left + fromRect.width / 2 - containerRect.left - 7;
        const startY = fromRect.top + fromRect.height / 2 - containerRect.top - 7;
        const endX = toRect.left + toRect.width / 2 - containerRect.left - 7;
        const endY = toRect.top + toRect.height / 2 - containerRect.top - 7;

        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        particle.classList.add('active');

        let start = null;
        function animate(ts) {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            particle.style.left = (startX + (endX - startX) * eased) + 'px';
            particle.style.top = (startY + (endY - startY) * eased) + 'px';

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(animate);
    });
}

function hideParticle() {
    const particle = document.getElementById('flow-particle');
    if (particle) particle.classList.remove('active');
}

async function startDemoFlow() {
    if (demoRunning) return;
    demoRunning = true;

    const startBtn = document.getElementById('btn-start-flow');
    if (startBtn) startBtn.disabled = true;

    // Reset
    setAllNodesIdle();
    clearLog();
    clearHighlights();
    hideParticle();

    addLogEntry('🚀 Data flow initiated...');

    // Process each record
    for (let i = 0; i < demoData.length; i++) {
        if (!demoRunning) break;
        const record = demoData[i];

        await delay(600);
        highlightDataRow(i);
        addLogEntry(`📥 FlowFile received: <strong>${record.orderId}</strong> — ${record.customer}`);

        // Data Source → GetFile
        setNodeState('node-source', 'processing');
        await delay(400);
        setNodeState('node-source', 'completed');

        await moveFlowParticle('node-source', 'node-getfile', 500);
        setNodeState('node-getfile', 'processing');
        addLogEntry(`📂 GetFile processing: ${record.orderId}`);
        await delay(500);
        setNodeState('node-getfile', 'completed');
        addLogEntry(`✅ GetFile completed for ${record.orderId}`);

        // GetFile → Transform
        await moveFlowParticle('node-getfile', 'node-transform', 500);
        setNodeState('node-transform', 'processing');
        addLogEntry(`🔄 Transforming data: ${record.orderId}`);
        await delay(600);
        setNodeState('node-transform', 'completed');
        addLogEntry(`✅ Data transformed: ${record.orderId}`);

        // Transform → Route
        await moveFlowParticle('node-transform', 'node-route', 500);
        setNodeState('node-route', 'processing');
        addLogEntry(`🔀 RouteOnAttribute evaluating: type = "${record.type}"`);
        await delay(500);
        setNodeState('node-route', 'completed');

        // Route to destination
        let destId, destName;
        if (record.type === 'Online') {
            destId = 'node-database';
            destName = 'Database';
        } else {
            destId = 'node-file';
            destName = 'File System';
        }

        await moveFlowParticle('node-route', destId, 600);
        setNodeState(destId, 'processing');
        addLogEntry(`📤 Routing ${record.orderId} → <strong>${destName}</strong>`);
        await delay(400);
        setNodeState(destId, 'completed');
        addLogEntry(`✅ ${record.orderId} delivered to ${destName} successfully`);

        hideParticle();
        await delay(300);
    }

    addLogEntry('');
    addLogEntry('🎉 <strong>All data processed successfully!</strong>');
    addLogEntry(`📊 Processed ${demoData.length} FlowFiles | 0 errors`);

    demoRunning = false;
    if (startBtn) startBtn.disabled = false;
}

function resetDemo() {
    demoRunning = false;
    demoTimeouts.forEach(clearTimeout);
    demoTimeouts = [];

    setAllNodesIdle();
    clearLog();
    clearHighlights();
    hideParticle();

    const startBtn = document.getElementById('btn-start-flow');
    if (startBtn) startBtn.disabled = false;

    addLogEntry('🔄 Demo reset. Ready to start.');
}

function delay(ms) {
    return new Promise(function (resolve) {
        const t = setTimeout(resolve, ms);
        demoTimeouts.push(t);
    });
}

/* ---- LOGOUT ---- */
function logout() {
    sessionStorage.removeItem('nifi_authenticated');
    window.location.href = 'index.html';
}
