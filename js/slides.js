/* ============================================================
   SLIDES DATA — Apache NiFi Presentation
   All 12 slides + Final Boss Quiz stored as JavaScript objects
   ============================================================ */

/* ============================================================
   🎯 QUIZ VIDEO CONFIGURATION
   ============================================================
   REPLACE THESE WITH YOUR VIDEO FILE PATHS.
   Example: "assets/videos/correct1.mp4"
   
   Each key maps to a question + outcome:
     correct1 / wrong1  →  Question 1
     correct2 / wrong2  →  Question 2
     correct3 / wrong3  →  Question 3
   ============================================================ */
const QUIZ_VIDEOS = {
    correct1: "assets/videos/KBC.mp4",        // Correct answer video for Q1
    wrong1:   "assets/videos/Game-Over.mp4",   // Wrong answer video for Q1

    correct2: "assets/videos/KBC.mp4",        // Correct answer video for Q2
    wrong2:   "assets/videos/Game-Over.mp4",   // Wrong answer video for Q2

    correct3: "assets/videos/KBC.mp4",        // Correct answer video for Q3
    wrong3:   "assets/videos/Game-Over.mp4"    // Wrong answer video for Q3
};

const slidesData = [
    // ─── SLIDE 1 ─────────────────────────────────────────
    {
        number: 1,
        title: "Apache NiFi",
        presenter: "Person 1",
        category: "Introduction",
        description: "Introduction to Apache NiFi and the purpose of the presentation.",
        renderContent: function () {
            return `
            <div class="slide-title-section">
                <div class="slide-section-category">Introduction</div>
                <h1>Apache NiFi</h1>
                <h2>Data Integration &amp; Flow Automation</h2>
                <div class="data-flow-line mb-4" style="max-width:400px;margin:0 auto;"></div>
                <img src="assets/images/nifi-hero.jpg" alt="Apache NiFi data flow visualization" class="slide-image mb-4" style="max-width:700px;margin:0 auto;display:block;border-radius:var(--radius-lg);">
                <div class="row justify-content-center mt-4 anim-stagger">
                    <div class="col-6 col-sm-4 col-md-2"><div class="team-card glass"><div class="avatar">04</div><div class="name">Shubham Chaubey</div></div></div>
                    <div class="col-6 col-sm-4 col-md-2"><div class="team-card glass"><div class="avatar">08</div><div class="name">Dhruvi Devalia</div></div></div>
                    <div class="col-6 col-sm-4 col-md-2"><div class="team-card glass"><div class="avatar">14</div><div class="name">Sarvesh Konde</div></div></div>
                    <div class="col-6 col-sm-4 col-md-2"><div class="team-card glass"><div class="avatar">17</div><div class="name">Tanmay Manjrekar</div></div></div>
                    <div class="col-6 col-sm-4 col-md-2"><div class="team-card glass"><div class="avatar">36</div><div class="name">Saish Patil</div></div></div>
                    <div class="col-6 col-sm-4 col-md-2"><div class="team-card glass"><div class="avatar">54</div><div class="name">Sourav Sharma</div></div></div>
                </div>
                <div class="glass mt-3 p-3 d-inline-block" style="border-radius:var(--radius);">
                    <p class="mb-0" style="font-size:0.85rem;color:var(--text-secondary);">
                        <strong style="color:var(--sage);">Subject: Big Data Analytics </strong><br>
                        <strong style="color:var(--sage);">Institute:</strong> K. J. Somaiya Institute of Management
                    </p>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 2 ─────────────────────────────────────────
    {
        number: 2,
        title: "What is Apache NiFi?",
        presenter: "Person 1",
        category: "Overview",
        description: "Understanding Apache NiFi as an open-source data integration platform.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Overview</div>
            <h2 class="slide-section-title">What is Apache NiFi?</h2>
            <p class="slide-section-sub">An open-source platform for automating the movement and transformation of data</p>
            <div class="row anim-stagger">
                <div class="col-lg-7">
                    <div class="glass p-4 mb-3 glass-shimmer">
                        <h4 style="color:var(--sage);margin-bottom:1rem;font-size:1rem;">
                            <span style="margin-right:0.5rem;">⚡</span>Key Points
                        </h4>
                        <ul class="nifi-list">
                            <li>Open-source data integration platform by Apache Software Foundation</li>
                            <li>Automates movement and transformation of data between systems</li>
                            <li>Supports real-time data flows with guaranteed delivery</li>
                            <li>Provides a visual drag-and-drop web interface</li>
                            <li>Connects different systems, databases, APIs, and data sources</li>
                        </ul>
                    </div>
                    <div class="glass p-4 mb-3">
                        <h4 style="color:var(--sage);margin-bottom:0.8rem;font-size:1rem;">
                            <span style="margin-right:0.5rem;">📜</span>Brief History
                        </h4>
                        <p style="font-size:0.88rem;color:var(--text-secondary);">
                            Apache NiFi originated from a project called <strong style="color:var(--text-primary);">"Niagara Files"</strong> developed by the 
                            <strong style="color:var(--text-primary);">NSA (National Security Agency)</strong>. It was later contributed to the 
                            <strong style="color:var(--text-primary);">Apache Software Foundation</strong> and became a top-level project, making 
                            enterprise-grade data flow management accessible to everyone.
                        </p>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="glass p-4 h-100" style="border-left:3px solid var(--green);">
                        <h4 style="color:var(--text-primary);margin-bottom:1rem;font-size:1.1rem;text-align:center;">
                            🤔 Why do we need NiFi?
                        </h4>
                        <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.7;">
                            Organizations receive data from <strong style="color:var(--sage);">many different systems</strong> — databases, 
                            APIs, files, IoT devices, cloud services — and need a <strong style="color:var(--sage);">reliable, 
                            visual way</strong> to:
                        </p>
                        <div class="flow-diagram mt-3">
                            <div class="flow-node flow-node-primary" style="font-size:0.8rem;">📥 Collect</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary" style="font-size:0.8rem;">🔄 Transform</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary" style="font-size:0.8rem;">🔀 Route</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary" style="font-size:0.8rem;">📊 Monitor</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary" style="font-size:0.8rem;">📤 Deliver</div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 3 ─────────────────────────────────────────
    {
        number: 3,
        title: "Apache NiFi Architecture",
        presenter: "Person 2",
        category: "Architecture",
        description: "High-level architecture of Apache NiFi and how data flows through the system.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Architecture</div>
            <h2 class="slide-section-title">Apache NiFi Architecture</h2>
            <p class="slide-section-sub">Understanding how data moves through the NiFi ecosystem</p>
            
            <img src="assets/images/Architecture.png" alt="Apache NiFi Architecture Diagram" class="slide-image mb-4" style="max-width:800px;margin:0 auto;display:block;">
            
            <div class="row mt-3 anim-stagger">
                <div class="col-lg-8 mx-auto">
                    <div class="flow-diagram">
                        <div class="flow-node flow-node-primary"><span style="margin-right:0.5rem;">🌐</span>Data Sources <span class="d-block" style="font-size:0.7rem;color:var(--text-muted);">APIs, Files, Databases, IoT</span></div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-secondary glow-green" style="padding:1rem 2rem;"><span style="margin-right:0.5rem;">⚙</span>Apache NiFi <span class="d-block" style="font-size:0.7rem;color:var(--text-muted);">Web-based Flow Controller</span></div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-primary"><span style="margin-right:0.5rem;">🔧</span>Processors <span class="d-block" style="font-size:0.7rem;color:var(--text-muted);">Execute operations on FlowFiles</span></div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-secondary"><span style="margin-right:0.5rem;">🔀</span>Data Routing <span class="d-block" style="font-size:0.7rem;color:var(--text-muted);">Connections & queues</span></div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-primary"><span style="margin-right:0.5rem;">💾</span>Destinations <span class="d-block" style="font-size:0.7rem;color:var(--text-muted);">Databases, Files, APIs, Apps</span></div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4 anim-stagger">
                <div class="col-md-6 col-lg-3"><div class="info-card glass text-center"><div class="card-icon">📥</div><h4>Ingest</h4><p>Data enters from multiple sources</p></div></div>
                <div class="col-md-6 col-lg-3"><div class="info-card glass text-center"><div class="card-icon">⚙</div><h4>Process</h4><p>Processors perform operations</p></div></div>
                <div class="col-md-6 col-lg-3"><div class="info-card glass text-center"><div class="card-icon">🔗</div><h4>Connect</h4><p>Connections control movement</p></div></div>
                <div class="col-md-6 col-lg-3"><div class="info-card glass text-center"><div class="card-icon">📤</div><h4>Deliver</h4><p>Route to final destinations</p></div></div>
            </div>`;
        }
    },

    // ─── SLIDE 4 ─────────────────────────────────────────
    {
        number: 4,
        title: "Core Components",
        presenter: "Person 2",
        category: "Components",
        description: "The five core components that power Apache NiFi data flows.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Components</div>
            <h2 class="slide-section-title">Core Components</h2>
            <p class="slide-section-sub">The building blocks that power every NiFi data flow</p>
            <div class="row anim-stagger">
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--green);">
                        <div class="card-icon">📄</div>
                        <h4>FlowFile</h4>
                        <p>Represents the data being processed. Each FlowFile contains content (the actual data) and attributes (metadata key-value pairs describing the data).</p>
                        <div class="data-flow-line mt-2"></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--sage);">
                        <div class="card-icon">⚙</div>
                        <h4>Processor</h4>
                        <p>The workhorse of NiFi. Processors perform operations on FlowFiles — reading, transforming, routing, writing, and more. Over 300+ built-in processors available.</p>
                        <div class="data-flow-line mt-2"></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--teal);">
                        <div class="card-icon">🔗</div>
                        <h4>Connection</h4>
                        <p>Links processors together. Transfers FlowFiles between processors and provides queueing, back-pressure, and prioritization capabilities.</p>
                        <div class="data-flow-line mt-2"></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--green);">
                        <div class="card-icon">📦</div>
                        <h4>Process Group</h4>
                        <p>Organizes related processors and connections into a logical unit. Process Groups can be nested, enabling modular and reusable flow design.</p>
                        <div class="data-flow-line mt-2"></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--sage);">
                        <div class="card-icon">🛠</div>
                        <h4>Controller Service</h4>
                        <p>Provides shared configuration and functionality to processors. Examples include database connection pools and SSL context services.</p>
                        <div class="data-flow-line mt-2"></div>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 5 ─────────────────────────────────────────
    {
        number: 5,
        title: "How Data Flows in NiFi",
        presenter: "Person 3",
        category: "Data Flow",
        description: "Step-by-step journey of data through a NiFi pipeline.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Data Flow</div>
            <h2 class="slide-section-title">How Data Flows in NiFi</h2>
            <p class="slide-section-sub">Follow the journey of a FlowFile through the pipeline</p>
            <div class="row">
                <div class="col-lg-5">
                    <div class="flow-diagram anim-stagger">
                        <div class="flow-node flow-node-primary" style="min-width:200px;">
                            <span style="margin-right:0.5rem;">📥</span><strong>INPUT</strong>
                            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">Data enters the system</div>
                        </div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-secondary" style="min-width:200px;">
                            <span style="margin-right:0.5rem;">⚙</span><strong>PROCESS</strong>
                            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">Processor operates on data</div>
                        </div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-primary" style="min-width:200px;">
                            <span style="margin-right:0.5rem;">🔄</span><strong>TRANSFORM</strong>
                            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">Data is modified/enriched</div>
                        </div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-secondary" style="min-width:200px;">
                            <span style="margin-right:0.5rem;">🔀</span><strong>ROUTE</strong>
                            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">Determine destination</div>
                        </div>
                        <div class="flow-connector"></div>
                        <div class="flow-node flow-node-primary" style="min-width:200px;">
                            <span style="margin-right:0.5rem;">📤</span><strong>OUTPUT</strong>
                            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">Data reaches destination</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="glass p-4 mb-3" style="border-left:3px solid var(--green);">
                        <h4 style="color:var(--sage);font-size:0.95rem;"><span style="margin-right:0.5rem;">1️⃣</span>FlowFile Enters</h4>
                        <p style="font-size:0.85rem;color:var(--text-secondary);">A FlowFile is created when data enters the system from a source — a file directory, an HTTP endpoint, a database query, or a message queue. The FlowFile wraps the data with attributes.</p>
                    </div>
                    <div class="glass p-4 mb-3" style="border-left:3px solid var(--green);">
                        <h4 style="color:var(--sage);font-size:0.95rem;"><span style="margin-right:0.5rem;">2️⃣</span>Processor Operates</h4>
                        <p style="font-size:0.85rem;color:var(--text-secondary);">The FlowFile is passed to a Processor, which performs a specific operation — parsing CSV, extracting JSON fields, filtering records, or executing queries.</p>
                    </div>
                    <div class="glass p-4 mb-3" style="border-left:3px solid var(--green);">
                        <h4 style="color:var(--sage);font-size:0.95rem;"><span style="margin-right:0.5rem;">3️⃣</span>Data Transforms</h4>
                        <p style="font-size:0.85rem;color:var(--text-secondary);">The data content or attributes may be transformed — format conversion, enrichment with additional data, validation, or splitting into multiple FlowFiles.</p>
                    </div>
                    <div class="glass p-4 mb-3" style="border-left:3px solid var(--green);">
                        <h4 style="color:var(--sage);font-size:0.95rem;"><span style="margin-right:0.5rem;">4️⃣</span>NiFi Routes</h4>
                        <p style="font-size:0.85rem;color:var(--text-secondary);">Based on attributes and content, NiFi determines the correct path — routing to different processors or destinations based on conditions (success, failure, specific values).</p>
                    </div>
                    <div class="glass p-4" style="border-left:3px solid var(--sage);">
                        <h4 style="color:var(--sage);font-size:0.95rem;"><span style="margin-right:0.5rem;">5️⃣</span>Data Delivered</h4>
                        <p style="font-size:0.85rem;color:var(--text-secondary);">The processed FlowFile reaches its final destination — written to a database, saved as a file, sent to an API, or forwarded to another system.</p>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 6 ─────────────────────────────────────────
    {
        number: 6,
        title: "Processors",
        presenter: "Person 3",
        category: "Processors",
        description: "Common NiFi processors and their purposes in data flow operations.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Processors</div>
            <h2 class="slide-section-title">Processors</h2>
            <p class="slide-section-sub">The building blocks that perform work on your data</p>
            <div class="row anim-stagger">
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="glass p-3 h-100">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width:40px;height:40px;border-radius:10px;background:rgba(var(--green-rgb),0.2);display:flex;align-items:center;justify-content:center;margin-right:0.8rem;flex-shrink:0;">
                                <span style="font-size:1.1rem;">📂</span>
                            </div>
                            <div>
                                <h5 class="mono mb-0" style="color:var(--sage);font-size:0.88rem;">GetFile</h5>
                                <span style="font-size:0.68rem;color:var(--text-muted);">INPUT PROCESSOR</span>
                            </div>
                        </div>
                        <p style="font-size:0.82rem;color:var(--text-secondary);">Reads files from a local directory and creates FlowFiles from the file content.</p>
                        <div class="glass p-2 mt-2" style="background:rgba(var(--dark-rgb),0.4);border-radius:6px;">
                            <code style="font-size:0.72rem;color:var(--sage);">Example: Read CSV files from /data/input/</code>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="glass p-3 h-100">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width:40px;height:40px;border-radius:10px;background:rgba(var(--green-rgb),0.2);display:flex;align-items:center;justify-content:center;margin-right:0.8rem;flex-shrink:0;">
                                <span style="font-size:1.1rem;">🌐</span>
                            </div>
                            <div>
                                <h5 class="mono mb-0" style="color:var(--sage);font-size:0.88rem;">GetHTTP</h5>
                                <span style="font-size:0.68rem;color:var(--text-muted);">INPUT PROCESSOR</span>
                            </div>
                        </div>
                        <p style="font-size:0.82rem;color:var(--text-secondary);">Retrieves data from HTTP/HTTPS endpoints and creates FlowFiles from the response.</p>
                        <div class="glass p-2 mt-2" style="background:rgba(var(--dark-rgb),0.4);border-radius:6px;">
                            <code style="font-size:0.72rem;color:var(--sage);">Example: Fetch data from REST API</code>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="glass p-3 h-100">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width:40px;height:40px;border-radius:10px;background:rgba(var(--green-rgb),0.2);display:flex;align-items:center;justify-content:center;margin-right:0.8rem;flex-shrink:0;">
                                <span style="font-size:1.1rem;">💾</span>
                            </div>
                            <div>
                                <h5 class="mono mb-0" style="color:var(--sage);font-size:0.88rem;">PutFile</h5>
                                <span style="font-size:0.68rem;color:var(--text-muted);">OUTPUT PROCESSOR</span>
                            </div>
                        </div>
                        <p style="font-size:0.82rem;color:var(--text-secondary);">Writes the content of a FlowFile to a file in a specified directory on the local file system.</p>
                        <div class="glass p-2 mt-2" style="background:rgba(var(--dark-rgb),0.4);border-radius:6px;">
                            <code style="font-size:0.72rem;color:var(--sage);">Example: Save output to /data/output/</code>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="glass p-3 h-100">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width:40px;height:40px;border-radius:10px;background:rgba(var(--green-rgb),0.2);display:flex;align-items:center;justify-content:center;margin-right:0.8rem;flex-shrink:0;">
                                <span style="font-size:1.1rem;">🗃</span>
                            </div>
                            <div>
                                <h5 class="mono mb-0" style="color:var(--sage);font-size:0.88rem;">ExecuteSQL</h5>
                                <span style="font-size:0.68rem;color:var(--text-muted);">DATABASE PROCESSOR</span>
                            </div>
                        </div>
                        <p style="font-size:0.82rem;color:var(--text-secondary);">Executes a SQL SELECT query against a database, converting results into Avro format FlowFiles.</p>
                        <div class="glass p-2 mt-2" style="background:rgba(var(--dark-rgb),0.4);border-radius:6px;">
                            <code style="font-size:0.72rem;color:var(--sage);">Example: SELECT * FROM orders</code>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="glass p-3 h-100">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width:40px;height:40px;border-radius:10px;background:rgba(var(--green-rgb),0.2);display:flex;align-items:center;justify-content:center;margin-right:0.8rem;flex-shrink:0;">
                                <span style="font-size:1.1rem;">🏷</span>
                            </div>
                            <div>
                                <h5 class="mono mb-0" style="color:var(--sage);font-size:0.88rem;">UpdateAttribute</h5>
                                <span style="font-size:0.68rem;color:var(--text-muted);">TRANSFORM PROCESSOR</span>
                            </div>
                        </div>
                        <p style="font-size:0.82rem;color:var(--text-secondary);">Updates or adds attributes to a FlowFile. Used to modify metadata without changing the actual content.</p>
                        <div class="glass p-2 mt-2" style="background:rgba(var(--dark-rgb),0.4);border-radius:6px;">
                            <code style="font-size:0.72rem;color:var(--sage);">Example: Add timestamp attribute</code>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="glass p-3 h-100">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width:40px;height:40px;border-radius:10px;background:rgba(var(--green-rgb),0.2);display:flex;align-items:center;justify-content:center;margin-right:0.8rem;flex-shrink:0;">
                                <span style="font-size:1.1rem;">🔀</span>
                            </div>
                            <div>
                                <h5 class="mono mb-0" style="color:var(--sage);font-size:0.88rem;">RouteOnAttribute</h5>
                                <span style="font-size:0.68rem;color:var(--text-muted);">ROUTING PROCESSOR</span>
                            </div>
                        </div>
                        <p style="font-size:0.82rem;color:var(--text-secondary);">Routes FlowFiles based on attribute values using NiFi Expression Language conditions.</p>
                        <div class="glass p-2 mt-2" style="background:rgba(var(--dark-rgb),0.4);border-radius:6px;">
                            <code style="font-size:0.72rem;color:var(--sage);">Example: Route by order type</code>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 7 ─────────────────────────────────────────
    {
        number: 7,
        title: "Key Features of NiFi",
        presenter: "Person 4",
        category: "Features",
        description: "Six key features that make Apache NiFi a powerful data integration tool.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Features</div>
            <h2 class="slide-section-title">Key Features of NiFi</h2>
            <p class="slide-section-sub">What makes Apache NiFi stand out as a data integration platform</p>
            <div class="row anim-stagger">
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--green);">
                        <div class="card-icon">🖱</div>
                        <h4>Drag-and-Drop UI</h4>
                        <p>Build complex data flows visually by dragging processors onto the canvas and connecting them. No coding required for standard workflows.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--sage);">
                        <div class="card-icon">⚡</div>
                        <h4>Real-Time Processing</h4>
                        <p>Process data as it arrives with low latency. NiFi supports streaming data flows with immediate processing and routing capabilities.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--teal);">
                        <div class="card-icon">🔀</div>
                        <h4>Data Routing</h4>
                        <p>Route data based on content, attributes, or external conditions. Define rules that determine where each piece of data should go.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--green);">
                        <div class="card-icon">🔄</div>
                        <h4>Data Transformation</h4>
                        <p>Convert between formats (JSON, CSV, Avro, XML), enrich data, merge/split records, and apply complex transformation logic.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--sage);">
                        <div class="card-icon">🛑</div>
                        <h4>Back Pressure</h4>
                        <p>Automatically manages flow control. When a destination is slow, NiFi applies back pressure to prevent data overload and system crashes.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="info-card glass h-100 glass-shimmer" style="border-top:3px solid var(--teal);">
                        <div class="card-icon">📈</div>
                        <h4>Scalability</h4>
                        <p>Scale horizontally with NiFi clustering. Distribute processing across multiple nodes to handle increasing data volumes seamlessly.</p>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 8 ─────────────────────────────────────────
    {
        number: 8,
        title: "Data Provenance & Monitoring",
        presenter: "Person 4",
        category: "Provenance",
        description: "How NiFi tracks and monitors the complete journey of every piece of data.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Provenance</div>
            <h2 class="slide-section-title">Data Provenance &amp; Monitoring</h2>
            <p class="slide-section-sub">Track and monitor every piece of data through its entire journey</p>
            <div class="row">
                <div class="col-lg-6 mb-3">
                    <div class="glass p-4 h-100">
                        <h4 style="color:var(--sage);margin-bottom:1rem;font-size:1rem;">📍 Data Provenance</h4>
                        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">NiFi records every event that happens to a FlowFile, creating a complete audit trail.</p>
                        <div class="flow-diagram">
                            <div class="flow-node flow-node-primary" style="font-size:0.78rem;">🌐 Data Source</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary" style="font-size:0.78rem;">⚙ NiFi Ingests</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary" style="font-size:0.78rem;">🔧 Processor Operates</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary" style="font-size:0.78rem;">🔄 Transformation</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary" style="font-size:0.78rem;">💾 Destination</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                    <div class="glass p-4 mb-3" style="border-left:3px solid var(--green);">
                        <h4 style="color:var(--sage);margin-bottom:0.8rem;font-size:1rem;">🔍 Provenance Answers</h4>
                        <ul class="nifi-list">
                            <li><strong style="color:var(--text-primary);">Where</strong> did the data come from?</li>
                            <li><strong style="color:var(--text-primary);">What</strong> happened to the data?</li>
                            <li><strong style="color:var(--text-primary);">Which</strong> processors processed it?</li>
                            <li><strong style="color:var(--text-primary);">Where</strong> did the data go?</li>
                            <li><strong style="color:var(--text-primary);">When</strong> did each event happen?</li>
                        </ul>
                    </div>
                    <div class="glass p-3">
                        <h4 style="color:var(--sage);margin-bottom:0.8rem;font-size:0.9rem;">📊 Monitoring Dashboard</h4>
                        <div class="row">
                            <div class="col-6 col-md-4"><div class="monitor-card glass"><div class="metric">1,247</div><div class="metric-label">FlowFiles</div></div></div>
                            <div class="col-6 col-md-4"><div class="monitor-card glass"><div class="metric">38</div><div class="metric-label">Queued</div></div></div>
                            <div class="col-6 col-md-4"><div class="monitor-card glass"><div class="metric" style="color:var(--green);">●</div><div class="metric-label">Active</div></div></div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6"><div class="monitor-card glass"><div class="metric">24</div><div class="metric-label">Processors</div></div></div>
                            <div class="col-6"><div class="monitor-card glass"><div class="metric">99.8%</div><div class="metric-label">Uptime</div></div></div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 9 ─────────────────────────────────────────
    {
        number: 9,
        title: "Real-World Use Case — E-Commerce Data Pipeline",
        presenter: "Person 5",
        category: "Use Case",
        description: "A practical e-commerce data pipeline built with Apache NiFi.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Use Case</div>
            <h2 class="slide-section-title">Real-World Use Case</h2>
            <p class="slide-section-sub">E-Commerce Data Pipeline powered by Apache NiFi</p>
            
            <img src="assets/images/ecommerce-pipeline.jpg" alt="E-commerce data pipeline visualization" class="slide-image mb-4" style="max-width:750px;margin:0 auto;display:block;">
            
            <div class="row anim-stagger">
                <div class="col-lg-5 mb-3">
                    <div class="glass p-4 h-100">
                        <h4 style="color:var(--sage);margin-bottom:1rem;font-size:1rem;">🛒 Pipeline Flow</h4>
                        <div class="flow-diagram">
                            <div class="flow-node flow-node-primary" style="font-size:0.8rem;">🛒 Customer Orders</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary glow-green" style="font-size:0.8rem;">⚙ Apache NiFi</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary" style="font-size:0.8rem;">🧹 Data Cleaning</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary" style="font-size:0.8rem;">🔀 Data Routing</div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary" style="font-size:0.8rem;">💾 Database</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 mb-3">
                    <div class="glass p-4 mb-3">
                        <h4 style="color:var(--sage);margin-bottom:0.8rem;font-size:0.95rem;">📋 Sample Order Data</h4>
                        <div class="table-responsive">
                            <table class="data-table">
                                <thead>
                                    <tr><th>Customer ID</th><th>Order ID</th><th>Product</th><th>Qty</th><th>Price</th><th>City</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>C001</td><td>ORD001</td><td>Laptop</td><td>1</td><td>₹45,000</td><td>Mumbai</td></tr>
                                    <tr><td>C002</td><td>ORD002</td><td>Headphones</td><td>2</td><td>₹1,800</td><td>Pune</td></tr>
                                    <tr><td>C003</td><td>ORD003</td><td>Keyboard</td><td>1</td><td>₹4,200</td><td>Delhi</td></tr>
                                    <tr><td>C004</td><td>ORD004</td><td>Monitor</td><td>1</td><td>₹12,500</td><td>Mumbai</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="glass p-3">
                        <h4 style="color:var(--sage);margin-bottom:0.5rem;font-size:0.9rem;">⚡ What NiFi Does</h4>
                        <p style="font-size:0.82rem;color:var(--text-secondary);margin:0;">
                            NiFi collects incoming order data, <strong style="color:var(--text-primary);">validates fields</strong>, 
                            <strong style="color:var(--text-primary);">cleans inconsistencies</strong>, 
                            <strong style="color:var(--text-primary);">enriches with metadata</strong>, and 
                            <strong style="color:var(--text-primary);">routes to the appropriate database</strong> — all in real-time.
                        </p>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 10 ─────────────────────────────────────────
    {
        number: 10,
        title: "NiFi Flow Example",
        presenter: "Person 5",
        category: "Flow Example",
        description: "A detailed interactive NiFi pipeline from input to multiple destinations.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Flow Example</div>
            <h2 class="slide-section-title">NiFi Flow Example</h2>
            <p class="slide-section-sub">A detailed pipeline from data input to multiple destinations</p>
            <div class="row">
                <div class="col-12">
                    <div class="glass p-4 mb-3">
                        <div class="flow-diagram">
                            <div class="flow-node flow-node-primary" style="min-width:220px;">
                                <span style="margin-right:0.5rem;">📂</span><strong>CSV / API Source</strong>
                                <div style="font-size:0.68rem;color:var(--text-muted);margin-top:0.2rem;">Raw data input</div>
                            </div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary nifi-flow-tooltip" data-tooltip="Reads files from directories or fetches data from HTTP endpoints" style="min-width:220px;">
                                <span class="mono" style="color:var(--sage);font-size:0.82rem;">GetFile / GetHTTP</span>
                                <div style="font-size:0.68rem;color:var(--text-muted);margin-top:0.2rem;">Input Processor</div>
                            </div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-primary nifi-flow-tooltip" data-tooltip="Converts data format and transforms content — JSON to CSV, enrichment, validation" style="min-width:220px;">
                                <span style="margin-right:0.5rem;">🔄</span><strong>Convert / Transform</strong>
                                <div style="font-size:0.68rem;color:var(--text-muted);margin-top:0.2rem;">Data Transformation</div>
                            </div>
                            <div class="flow-connector"></div>
                            <div class="flow-node flow-node-secondary nifi-flow-tooltip glow-green" data-tooltip="Evaluates FlowFile attributes and routes to different destinations based on conditions" style="min-width:220px;">
                                <span class="mono" style="color:var(--sage);font-size:0.82rem;">RouteOnAttribute</span>
                                <div style="font-size:0.68rem;color:var(--text-muted);margin-top:0.2rem;">Routing Processor</div>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-3">
                            <div class="col-auto"><div class="pipeline-branch-line mx-auto"></div><span class="connection-label">SUCCESS</span></div>
                        </div>
                        <div class="row justify-content-center mt-2 anim-stagger">
                            <div class="col-md-4 col-sm-6 mb-2">
                                <div class="info-card glass text-center" style="border-top:3px solid var(--green);">
                                    <div class="card-icon">💾</div>
                                    <h4 style="font-size:0.88rem;">Database</h4>
                                    <p style="font-size:0.75rem;">PutDatabaseRecord — Store structured data</p>
                                    <span class="connection-label">Route: type = "online"</span>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-2">
                                <div class="info-card glass text-center" style="border-top:3px solid var(--sage);">
                                    <div class="card-icon">📁</div>
                                    <h4 style="font-size:0.88rem;">File System</h4>
                                    <p style="font-size:0.75rem;">PutFile — Save as local files</p>
                                    <span class="connection-label">Route: type = "offline"</span>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-2">
                                <div class="info-card glass text-center" style="border-top:3px solid var(--teal);">
                                    <div class="card-icon">🌐</div>
                                    <h4 style="font-size:0.88rem;">External API</h4>
                                    <p style="font-size:0.75rem;">PostHTTP — Forward to API endpoints</p>
                                    <span class="connection-label">Route: type = "api"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 11 ─────────────────────────────────────────
    {
        number: 11,
        title: "Advantages & Limitations",
        presenter: "Person 6",
        category: "Analysis",
        description: "Balanced analysis of Apache NiFi's strengths and limitations.",
        renderContent: function () {
            return `
            <div class="slide-section-category">Analysis</div>
            <h2 class="slide-section-title">Advantages &amp; Limitations</h2>
            <p class="slide-section-sub">A balanced view of Apache NiFi's strengths and challenges</p>
            <div class="row anim-stagger">
                <div class="col-md-6 mb-3">
                    <div class="compare-card glass advantages h-100">
                        <h3><span style="font-size:1.4rem;">✅</span> Advantages</h3>
                        <ul>
                            <li><strong style="color:var(--text-primary);">Easy Visual Interface</strong><br><span style="font-size:0.78rem;">Build complex data flows with drag-and-drop — no coding required for most tasks</span></li>
                            <li><strong style="color:var(--text-primary);">Real-Time Processing</strong><br><span style="font-size:0.78rem;">Process data streams as they arrive with low latency and guaranteed delivery</span></li>
                            <li><strong style="color:var(--text-primary);">300+ Integrations</strong><br><span style="font-size:0.78rem;">Connects to databases, cloud services, APIs, file systems, and message queues out of the box</span></li>
                            <li><strong style="color:var(--text-primary);">Data Provenance</strong><br><span style="font-size:0.78rem;">Complete audit trail tracks every event that happens to every piece of data</span></li>
                            <li><strong style="color:var(--text-primary);">Flexible Data Routing</strong><br><span style="font-size:0.78rem;">Route data based on content, attributes, or custom rules with fine-grained control</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="compare-card glass limitations h-100">
                        <h3><span style="font-size:1.4rem;">⚠</span> Limitations</h3>
                        <ul>
                            <li><strong style="color:var(--text-primary);">Resource Consumption</strong><br><span style="font-size:0.78rem;">NiFi can consume significant memory and CPU, especially with large-scale data flows</span></li>
                            <li><strong style="color:var(--text-primary);">Flow Complexity</strong><br><span style="font-size:0.78rem;">Complex flows with many processors can become difficult to manage and debug</span></li>
                            <li><strong style="color:var(--text-primary);">Configuration Knowledge</strong><br><span style="font-size:0.78rem;">Requires understanding of NiFi's configuration model, expression language, and best practices</span></li>
                            <li><strong style="color:var(--text-primary);">Workload Suitability</strong><br><span style="font-size:0.78rem;">Not ideal for every workload — complex event processing or heavy computation may need other tools</span></li>
                            <li><strong style="color:var(--text-primary);">State Management</strong><br><span style="font-size:0.78rem;">Managing stateful processors across clustered environments requires careful planning</span></li>
                        </ul>
                    </div>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 12 ─────────────────────────────────────────
    {
        number: 12,
        title: "Conclusion",
        presenter: "Person 6",
        category: "Conclusion",
        description: "Summary of key takeaways and final thoughts on Apache NiFi.",
        renderContent: function () {
            return `
            <div class="slide-title-section">
                <div class="slide-section-category">Conclusion</div>
                <h2 class="slide-section-title" style="font-size:2rem;">Conclusion</h2>
                <p class="slide-section-sub">Key takeaways from our exploration of Apache NiFi</p>
                
                <div class="row justify-content-center mt-4 mb-4 anim-stagger">
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="info-card glass text-center h-100">
                            <div class="card-icon">🔗</div>
                            <h4 style="font-size:0.9rem;">Simplifies Integration</h4>
                            <p>NiFi makes connecting disparate data systems visual and manageable.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="info-card glass text-center h-100">
                            <div class="card-icon">👁</div>
                            <h4 style="font-size:0.9rem;">Visual Data Flows</h4>
                            <p>Provides intuitive, visual management of complex data pipelines.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="info-card glass text-center h-100">
                            <div class="card-icon">🔄</div>
                            <h4 style="font-size:0.9rem;">Route & Transform</h4>
                            <p>Supports powerful routing, transformation, and monitoring capabilities.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="info-card glass text-center h-100">
                            <div class="card-icon">🌐</div>
                            <h4 style="font-size:0.9rem;">Universal Connector</h4>
                            <p>Connects different data sources and systems seamlessly.</p>
                        </div>
                    </div>
                </div>
                
                <div class="glass glass-strong p-4 d-inline-block mx-auto" style="max-width:600px;border-radius:var(--radius-lg);">
                    <p style="font-size:1.1rem;font-style:italic;color:var(--text-primary);margin-bottom:0.5rem;line-height:1.6;">
                        "Apache NiFi turns complex data movement into a <strong style="color:var(--sage);">visual, manageable flow</strong>."
                    </p>
                    <div class="data-flow-line" style="max-width:200px;margin:0.8rem auto;"></div>
                </div>
                
                <div class="mt-5">
                    <h2 style="font-size:2.5rem;font-weight:900;color:var(--text-primary);margin-bottom:0.5rem;">Thank You</h2>
                    <p style="font-size:1.1rem;color:var(--sage);margin-bottom:2rem;">Questions?</p>
                    <button class="btn-nifi" style="max-width:280px;margin:0 auto;display:block;font-size:1rem;padding:0.9rem 1.5rem;" onclick="window.location.href='demo.html'">
                        Launch NiFi Demo →
                    </button>
                </div>
            </div>`;
        }
    },

    // ─── SLIDE 13 — NI-FI FINAL BOSS QUIZ ────────────────
    {
        number: 13,
        title: "NI-FI FINAL BOSS",
        presenter: "Everyone",
        category: "Quiz",
        description: "Interactive MCQ quiz — let's see who was actually listening!",
        renderContent: function () {
            return `
            <div class="quiz-container">
                <div class="slide-section-category">Quiz</div>
                <h2 class="slide-section-title" style="font-size:2.2rem;">🎯 NI-FI FINAL BOSS</h2>
                <p class="slide-section-sub">Okay... enough theory. Let's see who was actually listening. 😈</p>
                <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:2rem;">Choose wisely. NiFi is watching... 👀</p>

                <!-- ───── QUESTION 1 ───── -->
                <div class="quiz-question-card glass" id="quiz-q1">
                    <div class="quiz-q-number">Q1</div>
                    <h3 class="quiz-q-text">What is the main job of Apache NiFi?</h3>
                    <div class="quiz-options" id="quiz-opts-1">
                        <button class="quiz-option-btn glass" data-q="1" data-val="A">
                            <span class="quiz-opt-letter">A</span> Making coffee ☕
                        </button>
                        <button class="quiz-option-btn glass" data-q="1" data-val="B">
                            <span class="quiz-opt-letter">B</span> Moving and processing data 🔄
                        </button>
                        <button class="quiz-option-btn glass" data-q="1" data-val="C">
                            <span class="quiz-opt-letter">C</span> Designing websites 🎨
                        </button>
                        <button class="quiz-option-btn glass" data-q="1" data-val="D">
                            <span class="quiz-opt-letter">D</span> Playing GTA during lab 😎
                        </button>
                    </div>
                    <div class="quiz-feedback" id="quiz-fb-1"></div>
                </div>

                <!-- ───── QUESTION 2 ───── -->
                <div class="quiz-question-card glass" id="quiz-q2" style="display:none;">
                    <div class="quiz-q-number">Q2</div>
                    <h3 class="quiz-q-text">Which NiFi component actually performs an operation on data?</h3>
                    <div class="quiz-options" id="quiz-opts-2">
                        <button class="quiz-option-btn glass" data-q="2" data-val="A">
                            <span class="quiz-opt-letter">A</span> Processor ⚙️
                        </button>
                        <button class="quiz-option-btn glass" data-q="2" data-val="B">
                            <span class="quiz-opt-letter">B</span> Keyboard ⌨️
                        </button>
                        <button class="quiz-option-btn glass" data-q="2" data-val="C">
                            <span class="quiz-opt-letter">C</span> FlowFile 📄
                        </button>
                        <button class="quiz-option-btn glass" data-q="2" data-val="D">
                            <span class="quiz-opt-letter">D</span> The presentation team 😭
                        </button>
                    </div>
                    <div class="quiz-feedback" id="quiz-fb-2"></div>
                </div>

                <!-- ───── QUESTION 3 ───── -->
                <div class="quiz-question-card glass" id="quiz-q3" style="display:none;">
                    <div class="quiz-q-number">Q3</div>
                    <h3 class="quiz-q-text">In our live demonstration, what does RouteOnAttribute use to decide where a FlowFile should go?</h3>
                    <div class="quiz-options" id="quiz-opts-3">
                        <button class="quiz-option-btn glass" data-q="3" data-val="A">
                            <span class="quiz-opt-letter">A</span> Random number generator 🎲
                        </button>
                        <button class="quiz-option-btn glass" data-q="3" data-val="B">
                            <span class="quiz-opt-letter">B</span> The teacher's mood 😭
                        </button>
                        <button class="quiz-option-btn glass" data-q="3" data-val="C">
                            <span class="quiz-opt-letter">C</span> FlowFile attributes 🧠
                        </button>
                        <button class="quiz-option-btn glass" data-q="3" data-val="D">
                            <span class="quiz-opt-letter">D</span> The weather 🌦️
                        </button>
                    </div>
                    <div class="quiz-feedback" id="quiz-fb-3"></div>
                </div>

                <!-- ───── RESULT SCREEN ───── -->
                <div class="quiz-result-screen glass glass-strong" id="quiz-result" style="display:none;">
                    <h2 style="font-size:2rem;font-weight:800;margin-bottom:0.5rem;">🎉 QUIZ COMPLETE</h2>
                    <div class="data-flow-line mb-3" style="max-width:200px;margin:0 auto;"></div>
                    <div id="quiz-score-display" style="font-size:1.4rem;font-weight:700;margin-bottom:0.5rem;"></div>
                    <div id="quiz-score-msg" style="font-size:1.1rem;color:var(--text-secondary);margin-bottom:2rem;"></div>
                    <button class="btn-nifi" style="max-width:260px;margin:0 auto;display:block;" id="quiz-retry-btn">
                        🔄 Try Again
                    </button>
                </div>
            </div>`;
        }
    }
];

// Total slides count
const TOTAL_SLIDES = slidesData.length;

/* ============================================================
   🎯 QUIZ ENGINE — initQuiz()
   ============================================================
   Called after Slide 13 renders. Wires up click handlers,
   score tracking, feedback, confetti, and video modal.
   ============================================================ */
function initQuiz() {
    // Quiz state
    let quizScore = 0;
    let currentQuestion = 1;

    // Correct answers
    const ANSWERS = { 1: 'B', 2: 'A', 3: 'C' };

    // Funny wrong messages per question
    const WRONG_MSGS = {
        1: "💀 Bro... we literally explained this.",
        2: "😭 The processor is disappointed.",
        3: "💀 RouteOnAttribute has left the chat."
    };

    // Correct message
    const CORRECT_MSG = "🔥 Correct! You actually listened!";

    // Score messages
    const SCORE_MSGS = {
        0: "💀 We need to restart the presentation.",
        1: "😭 You attended the presentation... physically.",
        2: "😎 Pretty good. NiFi approves.",
        3: "🔥 Certified NiFi Master"
    };

    // Bind all option buttons
    document.querySelectorAll('.quiz-option-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            handleAnswer(btn);
        });
    });

    // Bind retry button
    var retryBtn = document.getElementById('quiz-retry-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', resetQuiz);
    }

    function handleAnswer(btn) {
        var qNum = parseInt(btn.getAttribute('data-q'));
        var val = btn.getAttribute('data-val');
        var isCorrect = val === ANSWERS[qNum];

        // Disable all options for this question
        var opts = document.querySelectorAll('#quiz-opts-' + qNum + ' .quiz-option-btn');
        opts.forEach(function (o) {
            o.disabled = true;
            o.style.pointerEvents = 'none';
        });

        // Highlight correct answer
        opts.forEach(function (o) {
            if (o.getAttribute('data-val') === ANSWERS[qNum]) {
                o.classList.add('correct');
            }
        });

        // Show feedback
        var fbEl = document.getElementById('quiz-fb-' + qNum);

        if (isCorrect) {
            quizScore++;
            btn.classList.add('correct');
            fbEl.innerHTML = '<span class="quiz-fb-correct">' + CORRECT_MSG + '</span>';
            fbEl.classList.add('show');
            spawnConfetti(btn);
            // Open correct video modal
            setTimeout(function () {
                openQuizVideoModal(true, qNum);
            }, 800);
        } else {
            btn.classList.add('wrong');
            fbEl.innerHTML = '<span class="quiz-fb-wrong">' + WRONG_MSGS[qNum] + '</span>';
            fbEl.classList.add('show');
            btn.classList.add('shake-it');
            setTimeout(function () { btn.classList.remove('shake-it'); }, 500);
            // Open wrong video modal
            setTimeout(function () {
                openQuizVideoModal(false, qNum);
            }, 800);
        }

        // Advance to next question after modal is closed (handled by modal close callback)
        window._quizAdvance = function () {
            var nextQ = qNum + 1;
            if (nextQ <= 3) {
                var nextCard = document.getElementById('quiz-q' + nextQ);
                if (nextCard) {
                    nextCard.style.display = 'block';
                    nextCard.style.animation = 'fadeInUp 0.5s ease-out';
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                // Show result
                showResult();
            }
            window._quizAdvance = null;
        };
    }

    function showResult() {
        var resultEl = document.getElementById('quiz-result');
        var scoreEl = document.getElementById('quiz-score-display');
        var msgEl = document.getElementById('quiz-score-msg');
        if (resultEl && scoreEl && msgEl) {
            resultEl.style.display = 'block';
            resultEl.style.animation = 'fadeInUp 0.6s ease-out';
            scoreEl.textContent = quizScore + ' / 3';
            scoreEl.style.color = quizScore >= 2 ? 'var(--sage)' : '#e8a87c';
            msgEl.textContent = SCORE_MSGS[quizScore];
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

            if (quizScore === 3) {
                // Big confetti burst for perfect score
                for (var i = 0; i < 3; i++) {
                    setTimeout(function () { spawnConfetti(resultEl); }, i * 200);
                }
            }
        }
    }

    function resetQuiz() {
        quizScore = 0;
        currentQuestion = 1;

        // Hide Q2, Q3, result
        ['quiz-q2', 'quiz-q3', 'quiz-result'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });

        // Re-enable and reset all buttons
        document.querySelectorAll('.quiz-option-btn').forEach(function (btn) {
            btn.disabled = false;
            btn.style.pointerEvents = '';
            btn.classList.remove('correct', 'wrong', 'shake-it');
        });

        // Hide feedback
        document.querySelectorAll('.quiz-feedback').forEach(function (fb) {
            fb.classList.remove('show');
            fb.innerHTML = '';
        });

        // Scroll back to Q1
        var q1 = document.getElementById('quiz-q1');
        if (q1) {
            q1.style.animation = 'fadeInUp 0.5s ease-out';
            q1.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // --- Confetti effect ---
    function spawnConfetti(anchorEl) {
        var container = document.createElement('div');
        container.className = 'quiz-confetti-container';
        var rect = anchorEl.getBoundingClientRect();
        container.style.left = (rect.left + rect.width / 2) + 'px';
        container.style.top = (rect.top + window.scrollY) + 'px';
        document.body.appendChild(container);

        var colors = ['#2A835F', '#8BBB92', '#12544F', '#f0f7f4'];
        for (var i = 0; i < 24; i++) {
            var particle = document.createElement('div');
            particle.className = 'quiz-confetti-particle';
            particle.style.background = colors[i % colors.length];
            particle.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
            particle.style.setProperty('--y', (Math.random() * -180 - 40) + 'px');
            particle.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
            particle.style.animationDelay = (Math.random() * 0.3) + 's';
            particle.style.width = (Math.random() * 6 + 4) + 'px';
            particle.style.height = (Math.random() * 6 + 4) + 'px';
            container.appendChild(particle);
        }

        setTimeout(function () {
            if (container.parentNode) container.parentNode.removeChild(container);
        }, 1500);
    }
}

/* ============================================================
   🎬 QUIZ VIDEO MODAL — open / close
   ============================================================ */
function openQuizVideoModal(isCorrect, questionNum) {
    var modal = document.getElementById('quiz-video-modal');
    if (!modal) return;

    var label = modal.querySelector('.quiz-modal-label');
    var video = modal.querySelector('video');
    var source = video ? video.querySelector('source') : null;

    if (label) {
        label.textContent = isCorrect ? '🎬 CORRECT ANSWER' : '💀 WRONG ANSWER';
        label.className = 'quiz-modal-label ' + (isCorrect ? 'correct' : 'wrong');
    }

    // Set video source from config
    var key = (isCorrect ? 'correct' : 'wrong') + questionNum;
    var src = QUIZ_VIDEOS[key] || '';

    if (source) {
        source.setAttribute('src', src);
    }
    if (video) {
        video.load();
        video.muted = false; // Play with sound (allowed because user just clicked an answer)

        // Auto-close modal and advance when video ends
        video.onended = function () {
            video.onended = null;
            closeQuizVideoModal();
        };

        // Autoplay after a brief moment for the modal animation
        var playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(function () {
                // If autoplay fails, user can still click play
            });
        }
    }

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    window._quizModalOpen = true;
}

function closeQuizVideoModal() {
    var modal = document.getElementById('quiz-video-modal');
    if (!modal) return;

    var video = modal.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }

    modal.classList.remove('show');
    document.body.style.overflow = '';
    window._quizModalOpen = false;

    // Advance quiz after closing
    if (typeof window._quizAdvance === 'function') {
        setTimeout(window._quizAdvance, 300);
    }
}
