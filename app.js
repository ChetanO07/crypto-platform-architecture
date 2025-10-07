// P2P Crypto Exchange Architecture Visualization
class ArchitectureApp {
    constructor() {
        this.data = {
            "architecture_layers": {
                "presentation_layer": {
                    "title": "Presentation Layer",
                    "color": "#3498db",
                    "components": [
                        {
                            "name": "Web Application",
                            "technology": "Next.js 14 + React",
                            "description": "Modern web interface with real-time trading features",
                            "features": ["Responsive Design", "Real-time Updates", "PWA Support"],
                            "specs": "Performance: 60fps, Bundle size: <500KB"
                        },
                        {
                            "name": "Mobile Apps", 
                            "technology": "React Native",
                            "description": "Cross-platform mobile apps for iOS and Android",
                            "features": ["Biometric Auth", "Push Notifications", "Offline Mode"],
                            "specs": "App size: <50MB, Load time: <2s"
                        },
                        {
                            "name": "Admin Dashboard",
                            "technology": "Vue.js 3 + Nuxt",
                            "description": "Comprehensive admin control panel",
                            "features": ["User Management", "Analytics", "System Monitoring"],
                            "specs": "Dashboard metrics: Real-time updates, 100+ widgets"
                        }
                    ]
                },
                "api_gateway": {
                    "title": "API Gateway & Load Balancer",
                    "color": "#e74c3c",
                    "components": [
                        {
                            "name": "Kong Gateway",
                            "technology": "Kong + Redis",
                            "description": "API gateway with rate limiting and authentication",
                            "features": ["Rate Limiting", "JWT Validation", "Request Routing"],
                            "specs": "Throughput: 50K requests/sec, Latency: <10ms"
                        },
                        {
                            "name": "Load Balancer",
                            "technology": "NGINX/AWS ALB", 
                            "description": "Distributes traffic across microservices",
                            "features": ["Health Checks", "SSL Termination", "Session Affinity"],
                            "specs": "Availability: 99.99%, Auto-scaling enabled"
                        }
                    ]
                },
                "microservices": {
                    "title": "Core Microservices",
                    "color": "#2ecc71",
                    "components": [
                        {
                            "name": "User Service",
                            "technology": "Node.js + Express",
                            "database": "PostgreSQL",
                            "description": "Handles user registration, KYC, and profile management",
                            "features": ["User Registration", "KYC/AML", "Profile Management", "Reputation System"],
                            "apis": ["/users", "/kyc", "/profiles", "/reputation"],
                            "specs": "Users: 1M+, Response time: <100ms"
                        },
                        {
                            "name": "Order Service",
                            "technology": "Go + Gin Framework",
                            "database": "PostgreSQL + Redis Cache",
                            "description": "Manages P2P orders and advertisements",
                            "features": ["Order Creation", "Order Matching", "Advertisement Management", "Trade Execution"],
                            "apis": ["/orders", "/ads", "/matches", "/trades"],
                            "specs": "Orders: 50K/sec, Matching: <1ms"
                        },
                        {
                            "name": "Escrow Service",
                            "technology": "Node.js + Web3.js",
                            "database": "PostgreSQL + Blockchain",
                            "description": "Smart contract escrow management",
                            "features": ["Fund Locking", "Smart Contracts", "Dispute Resolution", "Multi-sig Support"],
                            "apis": ["/escrow", "/contracts", "/disputes", "/multisig"],
                            "specs": "Security: Multi-sig 2-of-3, Gas optimized"
                        },
                        {
                            "name": "Wallet Service",
                            "technology": "Python + FastAPI",
                            "database": "PostgreSQL + Redis",
                            "description": "Cryptocurrency wallet management",
                            "features": ["Hot Wallets", "Cold Storage", "Multi-currency", "Transaction Processing"],
                            "apis": ["/wallets", "/transactions", "/balances", "/transfers"],
                            "specs": "Assets: 100+ currencies, Security: HSM protected"
                        },
                        {
                            "name": "Payment Service",
                            "technology": "Node.js + Express",
                            "database": "PostgreSQL",
                            "description": "Fiat payment processing and verification",
                            "features": ["Payment Methods", "Bank Integration", "Payment Verification", "Refunds"],
                            "apis": ["/payments", "/methods", "/verify", "/refunds"],
                            "specs": "Methods: 50+ supported, Processing: <5 seconds"
                        },
                        {
                            "name": "Notification Service",
                            "technology": "Node.js + Socket.io",
                            "database": "Redis + MongoDB",
                            "description": "Real-time notifications and messaging",
                            "features": ["Push Notifications", "Email/SMS", "Real-time Updates", "Event Broadcasting"],
                            "apis": ["/notifications", "/push", "/email", "/events"],
                            "specs": "Delivery: 99.9% success rate, Latency: <500ms"
                        },
                        {
                            "name": "Chat Service",
                            "technology": "Node.js + Socket.io",
                            "database": "MongoDB",
                            "description": "Real-time messaging between traders",
                            "features": ["Real-time Chat", "File Sharing", "Message History", "Chat Moderation"],
                            "apis": ["/chat", "/messages", "/files", "/rooms"],
                            "specs": "Concurrent users: 10K+, Message delivery: Real-time"
                        }
                    ]
                },
                "blockchain_layer": {
                    "title": "Blockchain & Smart Contracts",
                    "color": "#9b59b6",
                    "components": [
                        {
                            "name": "Escrow Smart Contracts",
                            "technology": "Solidity + Hardhat",
                            "description": "Automated escrow with multi-signature support",
                            "features": ["Automated Escrow", "Time Locks", "Multi-signature", "Dispute Handling"],
                            "specs": "Gas cost: Optimized <50K gas, Security: Audited"
                        },
                        {
                            "name": "Multi-Chain Support",
                            "technology": "Web3.js + Ethers.js",
                            "description": "Support for multiple blockchain networks",
                            "features": ["Ethereum", "BSC", "Polygon", "Arbitrum"],
                            "specs": "Networks: 4+ supported, Interoperability: Cross-chain"
                        }
                    ]
                },
                "data_layer": {
                    "title": "Data Storage & Management",
                    "color": "#f39c12",
                    "components": [
                        {
                            "name": "Primary Database",
                            "technology": "PostgreSQL 15",
                            "description": "ACID-compliant relational database for critical data",
                            "features": ["User Data", "Order Data", "Transaction Records", "Audit Logs"],
                            "specs": "Storage: 100TB+, Backup: Daily automated"
                        },
                        {
                            "name": "Cache Layer",
                            "technology": "Redis Cluster",
                            "description": "High-performance caching and session storage",
                            "features": ["Session Storage", "Order Book Cache", "Rate Limiting", "Real-time Data"],
                            "specs": "Performance: <1ms access, Memory: 512GB cluster"
                        },
                        {
                            "name": "Document Store",
                            "technology": "MongoDB",
                            "description": "Flexible document storage for chat and logs",
                            "features": ["Chat Messages", "File Metadata", "Event Logs", "Analytics Data"],
                            "specs": "Documents: Billions, Sharding: Auto-scaling"
                        },
                        {
                            "name": "Search Engine",
                            "technology": "Elasticsearch",
                            "description": "Full-text search and analytics",
                            "features": ["User Search", "Order Search", "Transaction Search", "Analytics"],
                            "specs": "Index: 10M+ documents, Search: <50ms"
                        },
                        {
                            "name": "File Storage",
                            "technology": "AWS S3",
                            "description": "Scalable object storage for files and media",
                            "features": ["KYC Documents", "Chat Files", "System Backups", "Static Assets"],
                            "specs": "Storage: Unlimited, Availability: 99.999999999%"
                        }
                    ]
                },
                "external_services": {
                    "title": "External Integrations",
                    "color": "#34495e",
                    "components": [
                        {
                            "name": "KYC Providers",
                            "technology": "Jumio/Onfido/Sumsub",
                            "description": "Third-party identity verification services",
                            "features": ["Document Verification", "Facial Recognition", "AML Screening", "Risk Assessment"],
                            "specs": "Verification: <5 minutes, Accuracy: 99.5%"
                        },
                        {
                            "name": "Payment Gateways",
                            "technology": "Stripe/PayPal/Bank APIs",
                            "description": "Fiat payment processing integrations",
                            "features": ["Card Processing", "Bank Transfers", "Digital Wallets", "Payment Verification"],
                            "specs": "Processing: <5 seconds, Success rate: 99.8%"
                        },
                        {
                            "name": "Blockchain Nodes",
                            "technology": "Infura/Alchemy/QuickNode",
                            "description": "Blockchain network connectivity",
                            "features": ["Transaction Broadcasting", "Block Monitoring", "Contract Interaction", "Event Listening"],
                            "specs": "Uptime: 99.99%, Sync: Real-time"
                        }
                    ]
                }
            },
            "technology_stack": {
                "frontend": ["Next.js", "React", "Vue.js", "React Native", "Tailwind CSS"],
                "backend": ["Node.js", "Go", "Python", "Express", "FastAPI", "Gin"],
                "databases": ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"],
                "blockchain": ["Solidity", "Web3.js", "Ethers.js", "Hardhat"],
                "infrastructure": ["Docker", "Kubernetes", "AWS", "NGINX"],
                "monitoring": ["Prometheus", "Grafana", "ELK Stack"],
                "security": ["Kong", "Cloudflare", "HSM", "OAuth 2.0"]
            }
        };

        this.currentComponent = null;
        this.activeFlow = 'none';
        
        this.init();
    }

    init() {
        this.renderLayerNavigation();
        this.renderArchitectureLayers();
        this.renderTechnologyStack();
        this.setupEventListeners();
        this.setupSearch();
        this.populateFilters();
    }

    renderLayerNavigation() {
        const navContainer = document.getElementById('layer-nav');
        const layers = this.data.architecture_layers;
        
        navContainer.innerHTML = '';
        
        Object.entries(layers).forEach(([key, layer]) => {
            const layerItem = document.createElement('div');
            layerItem.className = 'layer-item';
            
            layerItem.innerHTML = `
                <div class="layer-header" data-layer="${key}">
                    <span class="layer-title">${layer.title}</span>
                    <span class="component-count">${layer.components.length}</span>
                </div>
                <div class="layer-components" id="components-${key}">
                    ${layer.components.map(component => 
                        `<a href="#" class="component-link" data-component="${key}.${component.name}">
                            ${component.name}
                        </a>`
                    ).join('')}
                </div>
            `;
            
            navContainer.appendChild(layerItem);
        });
    }

    renderArchitectureLayers() {
        const container = document.getElementById('architecture-layers');
        const layers = this.data.architecture_layers;
        
        container.innerHTML = '';
        
        Object.entries(layers).forEach(([key, layer]) => {
            const layerDiv = document.createElement('div');
            layerDiv.className = 'architecture-layer';
            layerDiv.id = `layer-${key}`;
            layerDiv.style.setProperty('--layer-color', layer.color);
            
            layerDiv.innerHTML = `
                <h3 class="layer-title-main">${layer.title}</h3>
                <div class="components-grid">
                    ${layer.components.map(component => `
                        <div class="component-card" 
                             data-component="${key}.${component.name}"
                             data-layer="${key}">
                            <h4 class="component-name">${component.name}</h4>
                            <div class="component-tech">${component.technology}</div>
                            <p class="component-description">${component.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            
            container.appendChild(layerDiv);
        });
    }

    renderTechnologyStack() {
        const container = document.getElementById('tech-categories');
        const techStack = this.data.technology_stack;
        
        container.innerHTML = '';
        
        Object.entries(techStack).forEach(([category, technologies]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'tech-category';
            
            categoryDiv.innerHTML = `
                <h4>${category}</h4>
                <div class="tech-tags">
                    ${technologies.map(tech => 
                        `<span class="tech-tag" data-tech="${tech}">${tech}</span>`
                    ).join('')}
                </div>
            `;
            
            container.appendChild(categoryDiv);
        });
    }

    setupEventListeners() {
        // Layer navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('.layer-header')) {
                this.toggleLayer(e.target.dataset.layer);
            }
        });

        // Component clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.component-card') || e.target.closest('.component-card')) {
                const card = e.target.matches('.component-card') ? e.target : e.target.closest('.component-card');
                this.showComponentDetails(card.dataset.component);
            }
            
            if (e.target.matches('.component-link')) {
                e.preventDefault();
                this.showComponentDetails(e.target.dataset.component);
            }
        });

        // Close details panel
        document.getElementById('close-details').addEventListener('click', () => {
            this.hideComponentDetails();
        });

        // Flow buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.flow-btn')) {
                this.setDataFlow(e.target.dataset.flow);
            }
        });

        // Metrics modal
        document.querySelectorAll('.metric-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showMetricsModal();
            });
        });

        document.getElementById('close-metrics').addEventListener('click', () => {
            this.hideMetricsModal();
        });

        document.querySelector('#metrics-modal .modal__overlay').addEventListener('click', () => {
            this.hideMetricsModal();
        });

        // Tech tag clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.tech-tag')) {
                this.filterByTechnology(e.target.dataset.tech);
            }
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const techFilter = document.getElementById('tech-filter');
        const typeFilter = document.getElementById('type-filter');
        
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });
        
        techFilter.addEventListener('change', (e) => {
            this.filterByTechnology(e.target.value);
        });
        
        typeFilter.addEventListener('change', (e) => {
            this.filterByType(e.target.value);
        });
    }

    populateFilters() {
        const techFilter = document.getElementById('tech-filter');
        const allTechs = new Set();
        
        Object.values(this.data.architecture_layers).forEach(layer => {
            layer.components.forEach(component => {
                // Extract individual technologies from compound strings
                const techs = component.technology.split(/[+\/\s]+/).filter(tech => tech.length > 2);
                techs.forEach(tech => allTechs.add(tech.trim()));
            });
        });
        
        Array.from(allTechs).sort().forEach(tech => {
            const option = document.createElement('option');
            option.value = tech;
            option.textContent = tech;
            techFilter.appendChild(option);
        });
    }

    toggleLayer(layerKey) {
        const header = document.querySelector(`[data-layer="${layerKey}"]`);
        const components = document.getElementById(`components-${layerKey}`);
        const layer = document.getElementById(`layer-${layerKey}`);
        
        // Toggle sidebar
        if (components.classList.contains('expanded')) {
            components.classList.remove('expanded');
            header.classList.remove('active');
        } else {
            // Close other layers
            document.querySelectorAll('.layer-components').forEach(comp => {
                comp.classList.remove('expanded');
            });
            document.querySelectorAll('.layer-header').forEach(head => {
                head.classList.remove('active');
            });
            
            components.classList.add('expanded');
            header.classList.add('active');
        }
        
        // Highlight layer in main view
        document.querySelectorAll('.architecture-layer').forEach(l => {
            l.classList.remove('highlighted');
        });
        
        if (header.classList.contains('active')) {
            layer.classList.add('highlighted');
            layer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    showComponentDetails(componentPath) {
        const [layerKey, componentName] = componentPath.split('.');
        const layer = this.data.architecture_layers[layerKey];
        const component = layer.components.find(c => c.name === componentName);
        
        if (!component) return;
        
        this.currentComponent = { layerKey, component };
        
        // Update UI
        document.querySelectorAll('.component-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const activeCard = document.querySelector(`[data-component="${componentPath}"]`);
        if (activeCard) {
            activeCard.classList.add('active');
        }
        
        // Show details panel
        const detailsPanel = document.getElementById('details-panel');
        const detailsContent = document.getElementById('details-content');
        
        detailsContent.innerHTML = this.generateComponentDetailsHTML(component, layer.title);
        
        detailsPanel.classList.add('open');
    }

    generateComponentDetailsHTML(component, layerTitle) {
        return `
            <div class="component-details active">
                <div class="detail-section">
                    <h4>Component Overview</h4>
                    <div class="spec-highlight">
                        <strong>${component.name}</strong><br>
                        <em>Layer:</em> ${layerTitle}<br>
                        <em>Technology:</em> ${component.technology}<br>
                        ${component.database ? `<em>Database:</em> ${component.database}<br>` : ''}
                    </div>
                    <p>${component.description}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Key Features</h4>
                    <ul class="detail-list">
                        ${component.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${component.apis ? `
                <div class="detail-section">
                    <h4>API Endpoints</h4>
                    <div>
                        ${component.apis.map(api => `<div class="api-endpoint">${api}</div>`).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="detail-section">
                    <h4>Specifications</h4>
                    <div class="spec-highlight">
                        ${component.specs}
                    </div>
                </div>
            </div>
        `;
    }

    hideComponentDetails() {
        const detailsPanel = document.getElementById('details-panel');
        detailsPanel.classList.remove('open');
        
        document.querySelectorAll('.component-card').forEach(card => {
            card.classList.remove('active');
        });
        
        this.currentComponent = null;
    }

    setDataFlow(flowType) {
        this.activeFlow = flowType;
        
        // Update button states
        document.querySelectorAll('.flow-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-flow="${flowType}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Clear existing flow effects
        document.querySelectorAll('.component-card').forEach(card => {
            card.classList.remove('flow-active');
        });
        
        // Apply flow effects based on type
        if (flowType !== 'none') {
            this.highlightFlowComponents(flowType);
        }
    }

    highlightFlowComponents(flowType) {
        const flowPaths = {
            registration: ['presentation_layer.Web Application', 'api_gateway.Kong Gateway', 'microservices.User Service', 'external_services.KYC Providers'],
            trading: ['presentation_layer.Web Application', 'api_gateway.Kong Gateway', 'microservices.Order Service', 'microservices.Escrow Service', 'blockchain_layer.Escrow Smart Contracts'],
            escrow: ['microservices.Escrow Service', 'blockchain_layer.Escrow Smart Contracts', 'microservices.Wallet Service', 'external_services.Blockchain Nodes']
        };
        
        const components = flowPaths[flowType] || [];
        
        components.forEach((componentPath, index) => {
            setTimeout(() => {
                const card = document.querySelector(`[data-component="${componentPath}"]`);
                if (card) {
                    card.classList.add('flow-active');
                }
            }, index * 500);
        });
    }

    performSearch(query) {
        if (!query.trim()) {
            this.clearSearch();
            return;
        }
        
        const searchTerm = query.toLowerCase();
        const components = document.querySelectorAll('.component-card');
        
        components.forEach(card => {
            const componentName = card.querySelector('.component-name').textContent.toLowerCase();
            const componentTech = card.querySelector('.component-tech').textContent.toLowerCase();
            const componentDesc = card.querySelector('.component-description').textContent.toLowerCase();
            
            const matches = componentName.includes(searchTerm) || 
                           componentTech.includes(searchTerm) || 
                           componentDesc.includes(searchTerm);
            
            if (matches) {
                card.style.display = 'block';
                card.style.border = '2px solid var(--color-primary)';
            } else {
                card.style.display = 'none';
                card.style.border = '';
            }
        });
    }

    filterByTechnology(tech) {
        if (!tech) {
            this.clearFilters();
            return;
        }
        
        const components = document.querySelectorAll('.component-card');
        
        components.forEach(card => {
            const componentTech = card.querySelector('.component-tech').textContent;
            
            if (componentTech.includes(tech)) {
                card.style.display = 'block';
                card.style.border = '2px solid var(--color-primary)';
            } else {
                card.style.display = 'none';
                card.style.border = '';
            }
        });
        
        // Update filter dropdown
        const techFilter = document.getElementById('tech-filter');
        techFilter.value = tech;
    }

    filterByType(type) {
        if (!type) {
            this.clearFilters();
            return;
        }
        
        const components = document.querySelectorAll('.component-card');
        const typeKeywords = {
            service: ['service', 'gateway', 'balancer'],
            database: ['postgresql', 'redis', 'mongodb', 'elasticsearch'],
            api: ['api', 'gateway', 'endpoint'],
            blockchain: ['blockchain', 'smart', 'contract', 'web3']
        };
        
        components.forEach(card => {
            const componentName = card.querySelector('.component-name').textContent.toLowerCase();
            const componentTech = card.querySelector('.component-tech').textContent.toLowerCase();
            
            const keywords = typeKeywords[type] || [];
            const matches = keywords.some(keyword => 
                componentName.includes(keyword) || componentTech.includes(keyword)
            );
            
            if (matches) {
                card.style.display = 'block';
                card.style.border = '2px solid var(--color-primary)';
            } else {
                card.style.display = 'none';
                card.style.border = '';
            }
        });
    }

    clearSearch() {
        document.getElementById('search-input').value = '';
        this.clearFilters();
    }

    clearFilters() {
        const components = document.querySelectorAll('.component-card');
        components.forEach(card => {
            card.style.display = 'block';
            card.style.border = '';
        });
        
        document.getElementById('tech-filter').value = '';
        document.getElementById('type-filter').value = '';
    }

    showMetricsModal() {
        const modal = document.getElementById('metrics-modal');
        modal.classList.remove('hidden');
    }

    hideMetricsModal() {
        const modal = document.getElementById('metrics-modal');
        modal.classList.add('hidden');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new ArchitectureApp();
});