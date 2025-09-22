// Municipal Administration Dashboard - Civic Hub
// Professional administrative interface for municipal staff

// Application data from provided JSON
const adminData = {
  metrics: {
    totalReports: 2847,
    pendingReports: 89,
    criticalIssues: 3,
    resolvedToday: 23,
    avgResponseTime: "3.2 hours",
    activeStaff: 45,
    departmentWorkload: {
      "Public Works": 34,
      "Sanitation": 22,
      "Electrical Services": 18,
      "Water Department": 8,
      "Parks & Recreation": 7,
      "Transportation": 12,
      "Code Enforcement": 5,
      "Building & Safety": 3
    }
  },
  departments: [
    {"id": "public-works", "name": "Public Works", "color": "#3B82F6", "staff": 12},
    {"id": "sanitation", "name": "Sanitation", "color": "#10B981", "staff": 8},
    {"id": "electrical", "name": "Electrical Services", "color": "#F59E0B", "staff": 6},
    {"id": "water", "name": "Water Department", "color": "#06B6D4", "staff": 7},
    {"id": "parks", "name": "Parks & Recreation", "color": "#8B5CF6", "staff": 5},
    {"id": "transportation", "name": "Transportation", "color": "#EF4444", "staff": 4},
    {"id": "code", "name": "Code Enforcement", "color": "#6B7280", "staff": 3},
    {"id": "building", "name": "Building & Safety", "color": "#F97316", "staff": 2}
  ],
  staffMembers: [
    {"id": "staff001", "name": "John Martinez", "department": "Public Works", "role": "Supervisor", "active": true},
    {"id": "staff002", "name": "Sarah Johnson", "department": "Sanitation", "role": "Coordinator", "active": true},
    {"id": "staff003", "name": "Mike Chen", "department": "Electrical Services", "role": "Technician Lead", "active": true},
    {"id": "staff004", "name": "Lisa Rodriguez", "department": "Water Department", "role": "Operations Manager", "active": true},
    {"id": "staff005", "name": "David Kim", "department": "Parks & Recreation", "role": "Maintenance Chief", "active": true},
    {"id": "staff006", "name": "Jennifer Davis", "department": "Transportation", "role": "Traffic Coordinator", "active": true},
    {"id": "staff007", "name": "Robert Wilson", "department": "Code Enforcement", "role": "Inspector", "active": true},
    {"id": "staff008", "name": "Maria Lopez", "department": "Building & Safety", "role": "Plan Reviewer", "active": false}
  ],
  detailedReports: [
    {
      "id": "RPT001",
      "citizenId": "user123",
      "citizenName": "Sarah Chen",
      "citizenPhone": "(555) 123-4567",
      "citizenEmail": "sarah.chen@email.com",
      "reporterHistory": 3,
      "reporterReliability": "High",
      "type": "Pothole",
      "description": "Large pothole on Main Street near the downtown intersection causing significant vehicle damage and creating safety hazards for cyclists and pedestrians. The hole is approximately 2 feet wide and 8 inches deep. Multiple cars have hit it today causing tire damage and alignment issues.",
      "location": {
        "address": "Main Street & 1st Avenue, Downtown",
        "coordinates": [40.7128, -74.0060],
        "zipCode": "10001",
        "district": "Downtown",
        "accuracy": "High (±3m)",
        "landmarks": "Near City Hall, opposite First National Bank"
      },
      "status": "Submitted",
      "priority": "High",
      "urgencyScore": 8.7,
      "aiCategoryConfidence": 0.94,
      "submittedAt": "2025-09-22T08:30:00Z",
      "acknowledgedAt": null,
      "resolvedAt": null,
      "assignedDepartment": null,
      "assignedStaff": null,
      "hasPhoto": true,
      "photoUrls": [
        "https://via.placeholder.com/800x600/333/fff?text=Pothole+Main+Street+1",
        "https://via.placeholder.com/800x600/333/fff?text=Pothole+Main+Street+2"
      ],
      "hasVoiceNote": true,
      "voiceNoteDuration": "00:45",
      "voiceNoteUrl": "audio_placeholder.mp3",
      "estimatedCost": 485,
      "estimatedResolutionTime": "2-3 business days",
      "requiredResources": ["Asphalt mix", "Traffic cones", "Repair crew", "Compaction equipment"],
      "internalNotes": [],
      "tags": ["traffic-hazard", "urgent-repair", "downtown", "vehicle-damage"],
      "weatherImpact": "Rain expected - priority increased",
      "trafficImpact": "High traffic area - requires traffic management",
      "communityVotes": 23,
      "duplicateReports": 3,
      "relatedReports": ["RPT045", "RPT067"],
      "timeline": [
        {"timestamp": "2025-09-22T08:30:00Z", "action": "Report Submitted", "by": "Sarah Chen", "note": "Initial report with photos and voice note"}
      ]
    },
    {
      "id": "RPT002",
      "citizenId": "user456",
      "citizenName": "Michael Rodriguez",
      "citizenPhone": "(555) 987-6543",
      "citizenEmail": "m.rodriguez@email.com",
      "reporterHistory": 1,
      "reporterReliability": "New",
      "type": "Streetlight",
      "description": "Broken streetlight at the intersection making it very dangerous for pedestrians crossing at night. The light has been out for over a week creating safety hazards for both pedestrians and drivers. Several near-miss incidents have been reported by neighbors.",
      "location": {
        "address": "Oak Avenue & 2nd Street",
        "coordinates": [40.7589, -73.9851],
        "zipCode": "10002",
        "district": "Midtown",
        "accuracy": "High (±2m)",
        "landmarks": "Near Midtown Elementary School, across from Metro Station"
      },
      "status": "In Progress",
      "priority": "High",
      "urgencyScore": 8.1,
      "aiCategoryConfidence": 0.97,
      "submittedAt": "2025-09-21T14:15:00Z",
      "acknowledgedAt": "2025-09-21T16:45:00Z",
      "resolvedAt": null,
      "assignedDepartment": "Electrical Services",
      "assignedStaff": "staff003",
      "hasPhoto": true,
      "photoUrls": [
        "https://via.placeholder.com/800x600/333/fff?text=Broken+Streetlight+Oak+Ave"
      ],
      "hasVoiceNote": false,
      "estimatedCost": 340,
      "estimatedResolutionTime": "1-2 business days",
      "requiredResources": ["LED streetlight assembly", "Lift truck", "Electrical tools", "Safety equipment"],
      "internalNotes": [
        {"author": "Mike Chen", "timestamp": "2025-09-21T17:00:00Z", "note": "Ordered replacement LED unit, will install tomorrow morning. Need to coordinate with traffic dept for lane closure."},
        {"author": "Mike Chen", "timestamp": "2025-09-22T09:15:00Z", "note": "Parts arrived. Installation scheduled for 2 PM today."}
      ],
      "tags": ["safety-hazard", "night-priority", "school-zone", "traffic-safety"],
      "publicSafetyRisk": "High - School zone and major intersection",
      "communityVotes": 17,
      "duplicateReports": 1,
      "timeline": [
        {"timestamp": "2025-09-21T14:15:00Z", "action": "Report Submitted", "by": "Michael Rodriguez", "note": "Report submitted with photo"},
        {"timestamp": "2025-09-21T16:45:00Z", "action": "Acknowledged", "by": "System", "note": "Auto-assigned to Electrical Services"},
        {"timestamp": "2025-09-21T17:00:00Z", "action": "Staff Assigned", "by": "Mike Chen", "note": "Assigned to Mike Chen - Technician Lead"},
        {"timestamp": "2025-09-22T09:15:00Z", "action": "Status Update", "by": "Mike Chen", "note": "Parts ordered and scheduled for installation"}
      ]
    },
    {
      "id": "RPT003",
      "citizenId": "user789",
      "citizenName": "Emily Johnson",
      "citizenPhone": "(555) 555-0123",
      "citizenEmail": "e.johnson@email.com",
      "reporterHistory": 5,
      "reporterReliability": "High",
      "type": "Trash/Garbage",
      "description": "Overflowing garbage bins in the central park area creating unsanitary conditions and attracting pests. Trash is scattered around the bins and creating an unpleasant environment for park visitors. The bins appear to have not been emptied in over a week.",
      "location": {
        "address": "Central Park - East Entrance",
        "coordinates": [40.7831, -73.9712],
        "zipCode": "10003",
        "district": "Upper East",
        "accuracy": "Medium (±8m)",
        "landmarks": "Near park playground, main walking path"
      },
      "status": "Resolved",
      "priority": "Medium",
      "urgencyScore": 5.8,
      "aiCategoryConfidence": 0.91,
      "submittedAt": "2025-09-20T09:20:00Z",
      "acknowledgedAt": "2025-09-20T11:30:00Z",
      "resolvedAt": "2025-09-21T08:15:00Z",
      "assignedDepartment": "Sanitation",
      "assignedStaff": "staff002",
      "hasPhoto": true,
      "photoUrls": [
        "https://via.placeholder.com/800x600/333/fff?text=Overflowing+Bins+Before",
        "https://via.placeholder.com/800x600/333/fff?text=Clean+Area+After"
      ],
      "hasVoiceNote": false,
      "actualCost": 175,
      "actualResolutionTime": "22h 55m",
      "requiredResources": ["Garbage truck", "Sanitation crew", "Cleaning supplies"],
      "internalNotes": [
        {"author": "Sarah Johnson", "timestamp": "2025-09-20T12:00:00Z", "note": "Scheduled for priority pickup tomorrow morning. Adding this location to weekly route review."},
        {"author": "Sarah Johnson", "timestamp": "2025-09-21T08:30:00Z", "note": "Cleanup completed. Bins emptied and area sanitized. Recommended increasing pickup frequency for this location."}
      ],
      "tags": ["sanitation", "health-hazard", "park-maintenance", "pest-control"],
      "citizenFeedback": {
        "rating": 5,
        "comment": "Excellent response time! The area looks great now. Thank you for the quick action.",
        "submittedAt": "2025-09-21T10:00:00Z"
      },
      "environmentalImpact": "Prevented pest infestation and maintained park cleanliness",
      "communityVotes": 31,
      "followUpScheduled": "2025-10-01T00:00:00Z",
      "timeline": [
        {"timestamp": "2025-09-20T09:20:00Z", "action": "Report Submitted", "by": "Emily Johnson", "note": "Report with photos of overflowing bins"},
        {"timestamp": "2025-09-20T11:30:00Z", "action": "Acknowledged", "by": "Sarah Johnson", "note": "Acknowledged and scheduled for next day pickup"},
        {"timestamp": "2025-09-21T06:00:00Z", "action": "Work Started", "by": "Sanitation Crew", "note": "Crew dispatched to location"},
        {"timestamp": "2025-09-21T08:15:00Z", "action": "Resolved", "by": "Sarah Johnson", "note": "Cleanup completed, area sanitized"},
        {"timestamp": "2025-09-21T10:00:00Z", "action": "Citizen Feedback", "by": "Emily Johnson", "note": "5-star rating with positive feedback"}
      ]
    },
    {
      "id": "RPT004",
      "citizenId": "user234",
      "citizenName": "David Kim",
      "citizenPhone": "(555) 444-5678",
      "citizenEmail": "d.kim@email.com",
      "reporterHistory": 2,
      "reporterReliability": "Medium",
      "type": "Water Leak",
      "description": "Major water main leak causing significant street flooding and disrupting water pressure to nearby buildings. Water is gushing from the street creating hazardous driving conditions and potential infrastructure damage. Several businesses report low water pressure.",
      "location": {
        "address": "Elm Street & Broadway",
        "coordinates": [40.7505, -73.9934],
        "zipCode": "10004",
        "district": "Financial",
        "accuracy": "High (±1m)",
        "landmarks": "Financial District, near Stock Exchange, opposite Federal Building"
      },
      "status": "Emergency Response",
      "priority": "Critical",
      "urgencyScore": 9.5,
      "aiCategoryConfidence": 0.98,
      "submittedAt": "2025-09-22T06:45:00Z",
      "acknowledgedAt": "2025-09-22T06:52:00Z",
      "resolvedAt": null,
      "assignedDepartment": "Water Department",
      "assignedStaff": "staff004",
      "hasPhoto": true,
      "photoUrls": [
        "https://via.placeholder.com/800x600/333/fff?text=Water+Main+Leak+Street+Flooding",
        "https://via.placeholder.com/800x600/333/fff?text=Emergency+Response+Scene"
      ],
      "hasVoiceNote": true,
      "voiceNoteDuration": "01:23",
      "voiceNoteUrl": "audio_placeholder.mp3",
      "estimatedCost": 3200,
      "estimatedResolutionTime": "6-8 hours",
      "requiredResources": ["Emergency repair crew", "Heavy excavation equipment", "Replacement pipe section", "Traffic control", "Water truck for affected buildings"],
      "internalNotes": [
        {"author": "Lisa Rodriguez", "timestamp": "2025-09-22T07:00:00Z", "note": "Emergency crew dispatched immediately. Coordinating with traffic dept for road closure. Notifying affected businesses."},
        {"author": "Emergency Dispatch", "timestamp": "2025-09-22T07:15:00Z", "note": "Road closure in effect. Emergency repairs in progress. Estimated 6-hour completion time."}
      ],
      "tags": ["emergency", "water-main", "traffic-impact", "business-disruption", "infrastructure"],
      "emergencyProtocol": "Level 2 - Infrastructure Emergency",
      "businessesAffected": 12,
      "trafficReroute": true,
      "publicSafetyRisk": "High - Flooding and traffic disruption",
      "communityVotes": 45,
      "mediaAttention": true,
      "timeline": [
        {"timestamp": "2025-09-22T06:45:00Z", "action": "Emergency Report", "by": "David Kim", "note": "Critical water main failure reported with photos and voice note"},
        {"timestamp": "2025-09-22T06:52:00Z", "action": "Emergency Response", "by": "System", "note": "Auto-escalated to emergency protocol"},
        {"timestamp": "2025-09-22T07:00:00Z", "action": "Crew Dispatched", "by": "Lisa Rodriguez", "note": "Emergency repair crew en route"},
        {"timestamp": "2025-09-22T07:15:00Z", "action": "Scene Secured", "by": "Emergency Team", "note": "Area secured, repairs in progress"}
      ]
    },
    {
      "id": "RPT005",
      "citizenId": "user567",
      "citizenName": "Lisa Brown",
      "citizenPhone": "(555) 888-9999",
      "citizenEmail": "l.brown@email.com",
      "reporterHistory": 4,
      "reporterReliability": "High",
      "type": "Graffiti",
      "description": "Offensive graffiti vandalism on the side wall of the public library building. The graffiti is highly visible from the main street and contains inappropriate content not suitable for families and children visiting the library.",
      "location": {
        "address": "Public Library - Main Street Side",
        "coordinates": [40.7282, -74.0776],
        "zipCode": "10005",
        "district": "Downtown",
        "accuracy": "High (±4m)",
        "landmarks": "Main Public Library, visible from Main Street sidewalk"
      },
      "status": "Resolved",
      "priority": "Medium",
      "urgencyScore": 4.5,
      "aiCategoryConfidence": 0.89,
      "submittedAt": "2025-09-19T13:20:00Z",
      "acknowledgedAt": "2025-09-19T15:30:00Z",
      "resolvedAt": "2025-09-20T10:45:00Z",
      "assignedDepartment": "Parks & Recreation",
      "assignedStaff": "staff005",
      "hasPhoto": true,
      "photoUrls": [
        "https://via.placeholder.com/800x600/333/fff?text=Graffiti+Before+Removal",
        "https://via.placeholder.com/800x600/333/fff?text=Clean+Wall+After+Removal"
      ],
      "hasVoiceNote": false,
      "actualCost": 225,
      "actualResolutionTime": "21h 25m",
      "requiredResources": ["Graffiti removal supplies", "Pressure washer", "Anti-graffiti coating", "Maintenance crew"],
      "internalNotes": [
        {"author": "David Kim", "timestamp": "2025-09-19T16:00:00Z", "note": "Scheduled for removal first thing tomorrow morning. Will apply anti-graffiti coating as preventive measure."},
        {"author": "David Kim", "timestamp": "2025-09-20T11:00:00Z", "note": "Graffiti removed successfully. Applied protective coating to prevent future incidents."}
      ],
      "tags": ["vandalism", "public-building", "family-area", "preventive-maintenance"],
      "citizenFeedback": {
        "rating": 4,
        "comment": "Good job cleaning it up! The protective coating is a nice touch.",
        "submittedAt": "2025-09-20T14:30:00Z"
      },
      "publicVisibility": "High - Main street location",
      "preventiveMeasures": "Anti-graffiti coating applied",
      "communityVotes": 19,
      "timeline": [
        {"timestamp": "2025-09-19T13:20:00Z", "action": "Report Submitted", "by": "Lisa Brown", "note": "Graffiti vandalism reported with photo"},
        {"timestamp": "2025-09-19T15:30:00Z", "action": "Acknowledged", "by": "David Kim", "note": "Report acknowledged, scheduled for next day"},
        {"timestamp": "2025-09-20T08:00:00Z", "action": "Work Started", "by": "Maintenance Crew", "note": "Graffiti removal in progress"},
        {"timestamp": "2025-09-20T10:45:00Z", "action": "Resolved", "by": "David Kim", "note": "Graffiti removed, protective coating applied"},
        {"timestamp": "2025-09-20T14:30:00Z", "action": "Citizen Feedback", "by": "Lisa Brown", "note": "4-star rating with positive feedback"}
      ]
    }
  ],
  currentAdmin: {
    "id": "admin001",
    "name": "Maria Gonzalez",
    "role": "Operations Manager",
    "department": "City Administration",
    "permissions": ["view_all", "assign_reports", "update_status", "manage_staff", "access_analytics"],
    "loginTime": "2025-09-22T08:00:00Z"
  }
};

// Application state
let currentReports = [...adminData.detailedReports];
let selectedReports = new Set();
let filterExpanded = false;
let currentSort = 'urgency-desc';
let activeFilters = {
  department: '',
  status: ['Submitted', 'Acknowledged', 'In Progress', 'Emergency Response'],
  priority: '',
  dateFrom: '',
  dateTo: '',
  location: ''
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🏛️ Municipal Administration Dashboard initializing...');
  initializeDashboard();
});

function initializeDashboard() {
  setupEventListeners();
  updateMetricsDisplay();
  renderIssuePins();
  renderReportsList();
  startRealTimeUpdates();
  
  console.log('✅ Municipal dashboard initialized successfully');
  showToast('Municipal Administration Dashboard loaded', 'success', '🏛️ System Online');
}

// Event Listeners Setup
function setupEventListeners() {
  console.log('Setting up event listeners...');

  // Filter toggle
  const filterToggle = document.getElementById('filter-toggle');
  if (filterToggle) {
    filterToggle.addEventListener('click', function(e) {
      e.preventDefault();
      toggleFilters();
    });
  }

  // Clear filters
  const clearFilters = document.getElementById('clear-filters');
  if (clearFilters) {
    clearFilters.addEventListener('click', function(e) {
      e.preventDefault();
      clearAllFilters();
    });
  }

  // Filter inputs
  setupFilterListeners();

  // Sort dropdown - Fixed implementation
  const sortSelect = document.getElementById('sort-reports');
  if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
      currentSort = e.target.value;
      sortAndRenderReports();
      console.log('Sort changed to:', currentSort);
    });
  }

  // Bulk operations - Fixed implementation
  setupBulkOperations();

  // Map interactions
  setupMapInteractions();

  // Modal controls - Fixed implementation
  setupModalListeners();

  // Refresh button
  const refreshBtn = document.getElementById('refresh-all');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', function(e) {
      e.preventDefault();
      refreshAllData();
    });
  }

  // Notification button
  const notificationsBtn = document.getElementById('notifications-btn');
  if (notificationsBtn) {
    notificationsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showNotificationCenter();
    });
  }

  console.log('✅ Event listeners setup complete');
}

// Filter System - Fixed implementation
function setupFilterListeners() {
  // Department filter - Fixed
  const departmentFilter = document.getElementById('department-filter');
  if (departmentFilter) {
    departmentFilter.addEventListener('change', function(e) {
      activeFilters.department = e.target.value;
      console.log('Department filter changed:', e.target.value);
      applyFilters();
    });
  }

  // Status checkboxes - Fixed
  const statusCheckboxes = document.querySelectorAll('[id^="status-"]');
  statusCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(e) {
      console.log('Status checkbox changed:', e.target.value, e.target.checked);
      updateStatusFilters();
    });
  });

  // Priority filter - Fixed
  const priorityFilter = document.getElementById('priority-filter');
  if (priorityFilter) {
    priorityFilter.addEventListener('change', function(e) {
      activeFilters.priority = e.target.value;
      console.log('Priority filter changed:', e.target.value);
      applyFilters();
    });
  }

  // Date range filters - Fixed
  const dateFrom = document.getElementById('date-from');
  const dateTo = document.getElementById('date-to');
  if (dateFrom) {
    dateFrom.addEventListener('change', function(e) {
      activeFilters.dateFrom = e.target.value;
      console.log('Date from changed:', e.target.value);
      applyFilters();
    });
  }
  if (dateTo) {
    dateTo.addEventListener('change', function(e) {
      activeFilters.dateTo = e.target.value;
      console.log('Date to changed:', e.target.value);
      applyFilters();
    });
  }

  // Location search - Fixed
  const locationSearch = document.getElementById('location-search');
  if (locationSearch) {
    locationSearch.addEventListener('input', debounce(function(e) {
      activeFilters.location = e.target.value.toLowerCase();
      console.log('Location search changed:', e.target.value);
      applyFilters();
    }, 300));
  }
}

function toggleFilters() {
  filterExpanded = !filterExpanded;
  const filterContent = document.getElementById('filter-content');
  if (filterContent) {
    filterContent.classList.toggle('expanded', filterExpanded);
    console.log('Filters toggled:', filterExpanded ? 'expanded' : 'collapsed');
  }
}

function clearAllFilters() {
  activeFilters = {
    department: '',
    status: ['Submitted', 'Acknowledged', 'In Progress', 'Emergency Response'],
    priority: '',
    dateFrom: '',
    dateTo: '',
    location: ''
  };

  // Reset form elements
  const departmentFilter = document.getElementById('department-filter');
  const priorityFilter = document.getElementById('priority-filter');
  const dateFrom = document.getElementById('date-from');
  const dateTo = document.getElementById('date-to');
  const locationSearch = document.getElementById('location-search');

  if (departmentFilter) departmentFilter.value = '';
  if (priorityFilter) priorityFilter.value = '';
  if (dateFrom) dateFrom.value = '';
  if (dateTo) dateTo.value = '';
  if (locationSearch) locationSearch.value = '';

  // Reset status checkboxes
  const statusCheckboxes = document.querySelectorAll('[id^="status-"]');
  statusCheckboxes.forEach(checkbox => {
    checkbox.checked = true;
  });

  applyFilters();
  showToast('All filters cleared', 'info', '🔍 Filters Reset');
}

function updateStatusFilters() {
  const checkedStatuses = [];
  const statusCheckboxes = document.querySelectorAll('[id^="status-"]');
  statusCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkedStatuses.push(checkbox.value);
    }
  });
  activeFilters.status = checkedStatuses;
  applyFilters();
}

function applyFilters() {
  let filteredReports = [...adminData.detailedReports];

  // Apply department filter
  if (activeFilters.department) {
    filteredReports = filteredReports.filter(report => {
      const dept = adminData.departments.find(d => d.id === activeFilters.department);
      return report.assignedDepartment === dept?.name;
    });
  }

  // Apply status filter
  if (activeFilters.status.length > 0) {
    filteredReports = filteredReports.filter(report => 
      activeFilters.status.includes(report.status)
    );
  }

  // Apply priority filter
  if (activeFilters.priority) {
    filteredReports = filteredReports.filter(report => 
      report.priority === activeFilters.priority
    );
  }

  // Apply date range filter
  if (activeFilters.dateFrom) {
    const fromDate = new Date(activeFilters.dateFrom);
    filteredReports = filteredReports.filter(report => 
      new Date(report.submittedAt) >= fromDate
    );
  }
  if (activeFilters.dateTo) {
    const toDate = new Date(activeFilters.dateTo);
    toDate.setHours(23, 59, 59, 999); // End of day
    filteredReports = filteredReports.filter(report => 
      new Date(report.submittedAt) <= toDate
    );
  }

  // Apply location search filter
  if (activeFilters.location) {
    filteredReports = filteredReports.filter(report => 
      report.location.address.toLowerCase().includes(activeFilters.location) ||
      report.location.district.toLowerCase().includes(activeFilters.location)
    );
  }

  currentReports = filteredReports;
  sortAndRenderReports();
  updateActiveReportsCount();
  console.log('Filters applied, showing', filteredReports.length, 'reports');
}

// Sorting System - Fixed
function sortAndRenderReports() {
  const sortedReports = [...currentReports];

  switch (currentSort) {
    case 'urgency-desc':
      sortedReports.sort((a, b) => b.urgencyScore - a.urgencyScore);
      break;
    case 'date-desc':
      sortedReports.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
      break;
    case 'date-asc':
      sortedReports.sort((a, b) => new Date(a.submittedAt) - new Date(b.submittedAt));
      break;
    case 'priority-desc':
      const priorityOrder = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
      sortedReports.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
      break;
    case 'status':
      const statusOrder = { 'Emergency Response': 4, 'Submitted': 3, 'In Progress': 2, 'Resolved': 1 };
      sortedReports.sort((a, b) => statusOrder[b.status] - statusOrder[a.status]);
      break;
    case 'location':
      sortedReports.sort((a, b) => a.location.address.localeCompare(b.location.address));
      break;
    case 'department':
      sortedReports.sort((a, b) => (a.assignedDepartment || '').localeCompare(b.assignedDepartment || ''));
      break;
  }

  currentReports = sortedReports;
  renderReportsList();
  renderIssuePins();
}

// Bulk Operations - Fixed implementation
function setupBulkOperations() {
  const selectAll = document.getElementById('select-all');
  if (selectAll) {
    selectAll.addEventListener('change', function(e) {
      console.log('Select all clicked:', e.target.checked);
      toggleSelectAll(e.target.checked);
    });
  }

  const bulkAssign = document.getElementById('bulk-assign');
  const bulkStatus = document.getElementById('bulk-status');
  const bulkExport = document.getElementById('bulk-export');

  if (bulkAssign) {
    bulkAssign.addEventListener('click', function(e) {
      e.preventDefault();
      showBulkAssignModal();
    });
  }
  if (bulkStatus) {
    bulkStatus.addEventListener('click', function(e) {
      e.preventDefault();
      showBulkStatusModal();
    });
  }
  if (bulkExport) {
    bulkExport.addEventListener('click', function(e) {
      e.preventDefault();
      exportSelectedReports();
    });
  }
}

function toggleSelectAll(checked) {
  const reportCheckboxes = document.querySelectorAll('.report-checkbox');
  
  if (checked) {
    reportCheckboxes.forEach(checkbox => {
      checkbox.checked = true;
      selectedReports.add(checkbox.value);
    });
  } else {
    reportCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    selectedReports.clear();
  }
  
  updateBulkActionsVisibility();
  console.log('Selected reports:', selectedReports.size);
}

function updateBulkActionsVisibility() {
  const bulkActions = document.getElementById('bulk-actions');
  if (bulkActions) {
    bulkActions.classList.toggle('hidden', selectedReports.size === 0);
  }
}

// Interactive Map
function setupMapInteractions() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      toggleButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const layer = e.target.dataset.layer;
      filterMapPins(layer);
    });
  });

  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');
  
  if (zoomIn) zoomIn.addEventListener('click', function(e) {
    e.preventDefault();
    zoomMap(1.2);
  });
  if (zoomOut) zoomOut.addEventListener('click', function(e) {
    e.preventDefault();
    zoomMap(0.8);
  });
}

function renderIssuePins() {
  const pinsContainer = document.getElementById('issue-pins');
  if (!pinsContainer) return;

  pinsContainer.innerHTML = '';

  currentReports.forEach(report => {
    const pin = createIssuePin(report);
    pinsContainer.appendChild(pin);
  });
}

function createIssuePin(report) {
  const pin = document.createElement('div');
  pin.className = `issue-pin ${getIssueTypeClass(report.type)}`;
  if (report.priority === 'Critical') {
    pin.classList.add('critical');
  }

  // Position pin randomly within map bounds for demo
  const mapRect = { width: 100, height: 100 };
  const x = Math.random() * (mapRect.width - 20) + 10;
  const y = Math.random() * (mapRect.height - 20) + 10;
  
  pin.style.left = `${x}%`;
  pin.style.top = `${y}%`;

  // Add click handler - Fixed
  pin.addEventListener('click', function(e) {
    e.stopPropagation();
    selectReportFromMap(report.id);
    showPinTooltip(pin, report);
  });

  // Add hover tooltip
  pin.addEventListener('mouseenter', function(e) {
    showPinTooltip(pin, report);
  });

  pin.addEventListener('mouseleave', function() {
    hidePinTooltip();
  });

  return pin;
}

function showPinTooltip(pin, report) {
  // Remove existing tooltip
  hidePinTooltip();

  const tooltip = document.createElement('div');
  tooltip.className = 'pin-tooltip';
  tooltip.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 4px;">${report.id} - ${report.type}</div>
    <div style="font-size: 11px; margin-bottom: 2px;">${report.location.address}</div>
    <div style="font-size: 11px; color: var(--color-text-secondary);">
      ${getPriorityEmoji(report.priority)} ${report.priority} Priority
    </div>
    <div style="font-size: 11px; margin-top: 4px;">
      Status: ${getStatusEmoji(report.status)} ${report.status}
    </div>
  `;

  const pinRect = pin.getBoundingClientRect();
  const mapContainer = pin.closest('.map-container');
  const mapRect = mapContainer.getBoundingClientRect();

  tooltip.style.position = 'absolute';
  tooltip.style.left = `${pinRect.left - mapRect.left + 20}px`;
  tooltip.style.top = `${pinRect.top - mapRect.top - 10}px`;
  tooltip.style.zIndex = '1000';

  mapContainer.appendChild(tooltip);
}

function hidePinTooltip() {
  const existingTooltip = document.querySelector('.pin-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }
}

function selectReportFromMap(reportId) {
  const reportElement = document.querySelector(`[data-report-id="${reportId}"]`);
  if (reportElement) {
    // Highlight the report in the sidebar
    document.querySelectorAll('.report-card').forEach(card => {
      card.classList.remove('selected');
    });
    reportElement.classList.add('selected');
    
    // Scroll to report in sidebar
    reportElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function filterMapPins(layer) {
  const pins = document.querySelectorAll('.issue-pin');
  
  switch (layer) {
    case 'all':
      pins.forEach(pin => pin.style.display = 'block');
      break;
    case 'critical':
      pins.forEach(pin => {
        pin.style.display = pin.classList.contains('critical') ? 'block' : 'none';
      });
      break;
    case 'clusters':
      // Implement clustering logic here
      pins.forEach(pin => pin.style.display = 'block');
      break;
  }
}

function zoomMap(factor) {
  const mapContainer = document.querySelector('.map-background');
  if (mapContainer) {
    const currentTransform = mapContainer.style.transform || 'scale(1)';
    const currentScale = parseFloat(currentTransform.match(/scale\(([^)]+)\)/)?.[1] || 1);
    const newScale = Math.max(0.5, Math.min(3, currentScale * factor));
    
    mapContainer.style.transform = `scale(${newScale})`;
    mapContainer.style.transformOrigin = 'center center';
  }
}

// Reports List Rendering - Fixed
function renderReportsList() {
  const reportsList = document.getElementById('reports-list');
  if (!reportsList) return;

  reportsList.innerHTML = '';

  if (currentReports.length === 0) {
    reportsList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
        <div style="font-size: 2rem; margin-bottom: 1rem;">🔍</div>
        <div>No reports match the current filters</div>
      </div>
    `;
    return;
  }

  currentReports.forEach(report => {
    const reportCard = createReportCard(report);
    reportsList.appendChild(reportCard);
  });
}

function createReportCard(report) {
  const card = document.createElement('div');
  card.className = 'report-card';
  card.setAttribute('data-report-id', report.id);

  card.innerHTML = `
    <div class="report-card-content">
      <div class="report-header">
        <div class="report-id-section">
          <input type="checkbox" class="report-checkbox" value="${report.id}" style="margin-right: 8px;">
          <span class="report-id">${report.id}</span>
        </div>
        <div class="report-type">${getTypeEmoji(report.type)} ${report.type}</div>
      </div>
      <div class="report-description">${report.description}</div>
      <div class="report-meta">
        <div class="report-location">📍 ${report.location.address}</div>
        <div class="report-date">🕒 ${formatRelativeTime(report.submittedAt)}</div>
        <div class="report-urgency">🎯 Urgency: ${report.urgencyScore.toFixed(1)}/10</div>
      </div>
      <div class="report-footer">
        <div class="report-status ${getStatusClass(report.status)}">
          ${getStatusEmoji(report.status)} ${report.status}
        </div>
        <div class="report-actions">
          ${getReportActionButtons(report)}
        </div>
      </div>
    </div>
  `;

  // Add event listeners - Fixed
  const checkbox = card.querySelector('.report-checkbox');
  if (checkbox) {
    checkbox.addEventListener('change', function(e) {
      e.stopPropagation(); // Prevent card click
      if (e.target.checked) {
        selectedReports.add(report.id);
      } else {
        selectedReports.delete(report.id);
      }
      updateBulkActionsVisibility();
    });
  }

  // Add click handler for report details - Fixed
  card.addEventListener('click', function(e) {
    // Don't trigger if clicking on checkbox or action buttons
    if (!e.target.classList.contains('report-checkbox') && 
        !e.target.classList.contains('action-btn') &&
        !e.target.closest('.action-btn')) {
      console.log('Opening report details for:', report.id);
      showReportDetailsModal(report);
    }
  });

  return card;
}

function getReportActionButtons(report) {
  const buttons = [];

  if (report.status === 'Submitted') {
    buttons.push(`<button class="action-btn primary" onclick="event.stopPropagation(); updateReportStatus('${report.id}', 'Acknowledged')">👀 Acknowledge</button>`);
  }
  
  if (report.status === 'Acknowledged' || report.status === 'Submitted') {
    buttons.push(`<button class="action-btn" onclick="event.stopPropagation(); showAssignmentModal('${report.id}')">👥 Assign</button>`);
  }
  
  if (report.status === 'In Progress') {
    buttons.push(`<button class="action-btn" onclick="event.stopPropagation(); updateReportStatus('${report.id}', 'Resolved')">✅ Resolve</button>`);
  }

  return buttons.join('');
}

// Report Details Modal - Fixed implementation
function showReportDetailsModal(report) {
  console.log('Showing report details modal for:', report.id);
  const modal = document.getElementById('report-detail-modal');
  const title = document.getElementById('modal-report-title');
  const body = document.getElementById('modal-report-body');

  if (!modal || !title || !body) {
    console.error('Modal elements not found');
    return;
  }

  title.innerHTML = `${getTypeEmoji(report.type)} Report ${report.id} - ${report.type}`;
  
  body.innerHTML = `
    <div class="report-details">
      <div class="detail-main">
        <div class="detail-section">
          <h4 class="detail-title">📋 Report Information</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Type</div>
              <div class="detail-value">${getTypeEmoji(report.type)} ${report.type}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Priority</div>
              <div class="detail-value">${getPriorityEmoji(report.priority)} ${report.priority}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Status</div>
              <div class="detail-value">
                <span class="report-status ${getStatusClass(report.status)}">
                  ${getStatusEmoji(report.status)} ${report.status}
                </span>
              </div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Urgency Score</div>
              <div class="detail-value">🎯 ${report.urgencyScore.toFixed(1)}/10</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">AI Confidence</div>
              <div class="detail-value">🤖 ${Math.round(report.aiCategoryConfidence * 100)}%</div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4 class="detail-title">📝 Description</h4>
          <div class="detail-value">${report.description}</div>
        </div>

        <div class="detail-section">
          <h4 class="detail-title">📍 Location Details</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Address</div>
              <div class="detail-value">${report.location.address}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">District</div>
              <div class="detail-value">${report.location.district}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Accuracy</div>
              <div class="detail-value">${report.location.accuracy}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Landmarks</div>
              <div class="detail-value">${report.location.landmarks}</div>
            </div>
          </div>
        </div>

        ${report.hasPhoto ? `
          <div class="detail-section">
            <h4 class="detail-title">📷 Photo Gallery</h4>
            <div class="photo-gallery">
              ${report.photoUrls.map(url => `
                <div class="photo-item">
                  <img src="${url}" alt="Report photo" onclick="openImageModal('${url}')">
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${report.hasVoiceNote ? `
          <div class="detail-section">
            <h4 class="detail-title">🎤 Voice Note</h4>
            <div class="voice-player">
              <button class="play-btn" onclick="playVoiceNote('${report.voiceNoteUrl}')">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <div class="waveform">
                ${Array.from({length: 20}, (_, i) => 
                  `<div class="wave-bar" style="height: ${Math.random() * 20 + 5}px;"></div>`
                ).join('')}
              </div>
              <div class="duration">${report.voiceNoteDuration}</div>
            </div>
          </div>
        ` : ''}

        <div class="detail-section">
          <h4 class="detail-title">⏱️ Timeline</h4>
          <div class="timeline">
            ${report.timeline.map(event => `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-title">${event.action}</div>
                  <div class="timeline-meta">by ${event.by} • ${formatRelativeTime(event.timestamp)}</div>
                  ${event.note ? `<div class="timeline-note">${event.note}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="detail-section">
          <h4 class="detail-title">👤 Citizen Information</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Name</div>
              <div class="detail-value">${report.citizenName}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Phone</div>
              <div class="detail-value">${report.citizenPhone}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Email</div>
              <div class="detail-value">${report.citizenEmail}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">History</div>
              <div class="detail-value">${report.reporterHistory} reports</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Reliability</div>
              <div class="detail-value">${report.reporterReliability}</div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4 class="detail-title">💼 Assignment</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Department</div>
              <div class="detail-value">${report.assignedDepartment || 'Unassigned'}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Staff Member</div>
              <div class="detail-value">${getStaffName(report.assignedStaff) || 'Unassigned'}</div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4 class="detail-title">💰 Resource Planning</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Estimated Cost</div>
              <div class="detail-value">$${report.estimatedCost?.toLocaleString()}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Resolution Time</div>
              <div class="detail-value">${report.estimatedResolutionTime}</div>
            </div>
          </div>
          ${report.requiredResources ? `
            <div style="margin-top: 12px;">
              <div class="detail-label">Required Resources</div>
              <div style="font-size: 12px; margin-top: 4px;">
                ${report.requiredResources.map(resource => `• ${resource}`).join('<br>')}
              </div>
            </div>
          ` : ''}
        </div>

        ${report.internalNotes && report.internalNotes.length > 0 ? `
          <div class="detail-section">
            <h4 class="detail-title">📝 Internal Notes</h4>
            ${report.internalNotes.map(note => `
              <div style="margin-bottom: 12px; padding: 8px; background: var(--color-bg-1); border-radius: 6px; font-size: 12px;">
                <div style="font-weight: bold; margin-bottom: 4px;">${note.author}</div>
                <div style="color: var(--color-text-secondary); font-size: 11px; margin-bottom: 4px;">
                  ${formatRelativeTime(note.timestamp)}
                </div>
                <div>${note.note}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${report.tags ? `
          <div class="detail-section">
            <h4 class="detail-title">🏷️ Tags</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              ${report.tags.map(tag => `
                <span style="font-size: 10px; padding: 2px 6px; background: var(--color-bg-2); border-radius: 12px; color: var(--color-text-secondary);">
                  ${tag}
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  console.log('Modal displayed successfully');
}

// Modal Controls - Fixed implementation
function setupModalListeners() {
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal('report-detail-modal');
    });
  }

  // Fixed: Get all modal overlays, not just first one
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  });

  // Assignment form
  const assignDepartment = document.getElementById('assign-department');
  if (assignDepartment) {
    assignDepartment.addEventListener('change', updateStaffDropdown);
  }

  const confirmAssignment = document.getElementById('confirm-assignment');
  if (confirmAssignment) {
    confirmAssignment.addEventListener('click', function(e) {
      e.preventDefault();
      confirmReportAssignment();
    });
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    console.log('Modal closed:', modalId);
  }
}

function showAssignmentModal(reportId) {
  window.currentAssignmentReportId = reportId;
  const modal = document.getElementById('assignment-modal');
  if (modal) {
    modal.classList.remove('hidden');
    
    // Reset form
    document.getElementById('assign-department').value = '';
    document.getElementById('assign-staff').innerHTML = '<option value="">Select staff member...</option>';
    document.getElementById('assign-staff').disabled = true;
    document.getElementById('assign-priority').value = 'Medium';
    document.getElementById('assign-notes').value = '';
  }
}

function updateStaffDropdown() {
  const departmentSelect = document.getElementById('assign-department');
  const staffSelect = document.getElementById('assign-staff');
  
  if (!departmentSelect || !staffSelect) return;

  const selectedDeptId = departmentSelect.value;
  staffSelect.innerHTML = '<option value="">Select staff member...</option>';
  
  if (selectedDeptId) {
    const department = adminData.departments.find(d => d.id === selectedDeptId);
    if (department) {
      const departmentStaff = adminData.staffMembers.filter(s => 
        s.department === department.name && s.active
      );
      
      departmentStaff.forEach(staff => {
        const option = document.createElement('option');
        option.value = staff.id;
        option.textContent = `${staff.name} (${staff.role})`;
        staffSelect.appendChild(option);
      });
      
      staffSelect.disabled = false;
    }
  } else {
    staffSelect.disabled = true;
  }
}

function confirmReportAssignment() {
  const reportId = window.currentAssignmentReportId;
  const department = document.getElementById('assign-department').value;
  const staff = document.getElementById('assign-staff').value;
  const priority = document.getElementById('assign-priority').value;
  const notes = document.getElementById('assign-notes').value;

  if (!department) {
    showToast('Please select a department', 'error', '❌ Assignment Failed');
    return;
  }

  // Update report
  const report = adminData.detailedReports.find(r => r.id === reportId);
  if (report) {
    const dept = adminData.departments.find(d => d.id === department);
    report.assignedDepartment = dept.name;
    report.assignedStaff = staff || null;
    report.priority = priority;
    
    if (notes) {
      report.internalNotes = report.internalNotes || [];
      report.internalNotes.push({
        author: adminData.currentAdmin.name,
        timestamp: new Date().toISOString(),
        note: notes
      });
    }

    // Add timeline entry
    report.timeline.push({
      timestamp: new Date().toISOString(),
      action: 'Report Assigned',
      by: adminData.currentAdmin.name,
      note: `Assigned to ${dept.name}${staff ? ` (${getStaffName(staff)})` : ''}`
    });
  }

  // Close modal and refresh display
  closeModal('assignment-modal');
  renderReportsList();
  renderIssuePins();
  
  showToast(`Report ${reportId} assigned successfully`, 'success', '👥 Assignment Complete');
}

// Status and Assignment Updates
function updateReportStatus(reportId, newStatus) {
  const report = adminData.detailedReports.find(r => r.id === reportId);
  if (!report) return;

  const oldStatus = report.status;
  report.status = newStatus;

  // Update timestamps
  if (newStatus === 'Acknowledged' && !report.acknowledgedAt) {
    report.acknowledgedAt = new Date().toISOString();
  } else if (newStatus === 'Resolved' && !report.resolvedAt) {
    report.resolvedAt = new Date().toISOString();
  }

  // Add timeline entry
  report.timeline.push({
    timestamp: new Date().toISOString(),
    action: `Status Updated`,
    by: adminData.currentAdmin.name,
    note: `Status changed from ${oldStatus} to ${newStatus}`
  });

  // Update displays
  renderReportsList();
  renderIssuePins();
  updateMetricsDisplay();

  showToast(`Report ${reportId} status updated`, 'success', `✅ ${newStatus}`);
}

// Utility Functions
function getTypeEmoji(type) {
  const emojis = {
    'Pothole': '🕳️',
    'Streetlight': '💡',
    'Trash/Garbage': '🗑️',
    'Graffiti': '🎨',
    'Water Leak': '💧'
  };
  return emojis[type] || '❓';
}

function getIssueTypeClass(type) {
  const classes = {
    'Pothole': 'pothole',
    'Streetlight': 'streetlight',
    'Trash/Garbage': 'trash',
    'Graffiti': 'graffiti',
    'Water Leak': 'water-leak'
  };
  return classes[type] || 'other';
}

function getStatusEmoji(status) {
  const emojis = {
    'Submitted': '📋',
    'Acknowledged': '👀',
    'In Progress': '⏳',
    'Emergency Response': '🚨',
    'Resolved': '✅'
  };
  return emojis[status] || '📋';
}

function getPriorityEmoji(priority) {
  const emojis = {
    'Critical': '🚨',
    'High': '🔴',
    'Medium': '🟡',
    'Low': '🟢'
  };
  return emojis[priority] || '🟡';
}

function getStatusClass(status) {
  const classes = {
    'Submitted': 'submitted',
    'Acknowledged': 'acknowledged',
    'In Progress': 'in-progress',
    'Emergency Response': 'emergency',
    'Resolved': 'resolved'
  };
  return classes[status] || 'submitted';
}

function getStaffName(staffId) {
  if (!staffId) return null;
  const staff = adminData.staffMembers.find(s => s.id === staffId);
  return staff ? staff.name : 'Unknown';
}

function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays === 1) {
    return '1 day ago';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Display Updates
function updateMetricsDisplay() {
  const criticalCount = document.getElementById('critical-count');
  const pendingCount = document.getElementById('pending-count');
  const resolvedToday = document.getElementById('resolved-today');
  const avgResponse = document.getElementById('avg-response');
  const totalReports = document.getElementById('total-reports');
  const activeReports = document.getElementById('active-reports');

  if (criticalCount) criticalCount.textContent = adminData.metrics.criticalIssues;
  if (pendingCount) pendingCount.textContent = adminData.metrics.pendingReports;
  if (resolvedToday) resolvedToday.textContent = adminData.metrics.resolvedToday;
  if (avgResponse) avgResponse.textContent = adminData.metrics.avgResponseTime;
  if (totalReports) totalReports.textContent = adminData.metrics.totalReports;
  
  updateActiveReportsCount();
}

function updateActiveReportsCount() {
  const activeCount = currentReports.filter(r => r.status !== 'Resolved').length;
  const activeReports = document.getElementById('active-reports');
  if (activeReports) {
    activeReports.textContent = activeCount;
  }
}

// Real-time Updates
function startRealTimeUpdates() {
  setInterval(() => {
    // Simulate real-time data updates
    if (Math.random() > 0.7) {
      simulateNewReport();
    }
    
    if (Math.random() > 0.8) {
      simulateStatusUpdate();
    }
  }, 30000); // Every 30 seconds for demo
}

function simulateNewReport() {
  // In a real application, this would come from a WebSocket or polling
  adminData.metrics.totalReports += 1;
  adminData.metrics.pendingReports += 1;
  updateMetricsDisplay();
  
  showToast('New report received', 'info', '📢 Alert');
}

function simulateStatusUpdate() {
  const pendingReports = adminData.detailedReports.filter(r => r.status === 'In Progress');
  if (pendingReports.length > 0) {
    const randomReport = pendingReports[Math.floor(Math.random() * pendingReports.length)];
    if (Math.random() > 0.5) {
      updateReportStatus(randomReport.id, 'Resolved');
    }
  }
}

// Additional Features
function refreshAllData() {
  const btn = document.getElementById('refresh-all');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" style="animation: spin 1s linear infinite;">
        <path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
      </svg>
    `;

    setTimeout(() => {
      // Simulate data refresh
      updateMetricsDisplay();
      applyFilters();
      renderIssuePins();
      
      btn.disabled = false;
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
        </svg>
      `;
      
      showToast('Dashboard data refreshed', 'success', '🔄 Updated');
    }, 1500);
  }
}

function showNotificationCenter() {
  showToast('5 new notifications', 'info', '🔔 Notification Center');
}

function showBulkAssignModal() {
  if (selectedReports.size === 0) {
    showToast('Please select reports to assign', 'warning', '⚠️ No Selection');
    return;
  }
  showToast(`Bulk assignment for ${selectedReports.size} reports`, 'info', '👥 Bulk Operations');
}

function showBulkStatusModal() {
  if (selectedReports.size === 0) {
    showToast('Please select reports to update', 'warning', '⚠️ No Selection');
    return;
  }
  showToast(`Bulk status update for ${selectedReports.size} reports`, 'info', '📋 Bulk Operations');
}

function exportSelectedReports() {
  if (selectedReports.size === 0) {
    showToast('Please select reports to export', 'warning', '⚠️ No Selection');
    return;
  }
  showToast(`Exporting ${selectedReports.size} reports`, 'success', '📊 Export Complete');
}

// Toast System - Fixed
function showToast(message, type = 'info', title = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✅',
    error: '❌', 
    warning: '⚠️',
    info: 'ℹ️'
  };

  toast.innerHTML = `
    <div class="toast-icon">${title || icons[type]}</div>
    <div class="toast-content">
      ${title ? `<div class="toast-title">${title}</div>` : ''}
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(toast);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 5000);
}

// Global functions for onclick handlers - Fixed
window.updateReportStatus = updateReportStatus;
window.showAssignmentModal = showAssignmentModal;
window.closeModal = closeModal;
window.playVoiceNote = function(url) { 
  showToast('Playing voice note...', 'info', '🎤 Audio Player'); 
};
window.openImageModal = function(url) { 
  showToast('Opening image in full screen...', 'info', '📷 Image Viewer'); 
};

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Escape key closes modals
  if (e.key === 'Escape') {
    const visibleModal = document.querySelector('.modal:not(.hidden)');
    if (visibleModal) {
      visibleModal.classList.add('hidden');
    }
  }
  
  // F5 refreshes data
  if (e.key === 'F5' && !e.ctrlKey) {
    e.preventDefault();
    refreshAllData();
  }
});

// Add some CSS for spin animation since it might not be defined
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

console.log('🏛️ Municipal Administration Dashboard loaded successfully - Ready for professional civic management!');