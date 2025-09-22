// Enhanced Civic Hub - Hackathon Optimized Application

// Enhanced data from the provided JSON
const hackathonData = {
  hackathonMetrics: {
    totalReports: 2847,
    resolvedIssues: 2654,
    avgResponseTime: "3.2 hours",
    citizenSatisfaction: 4.8,
    costSavings: 187500,
    activeUsers: 8934,
    cityHealthScore: 92,
    environmentalImpact: {
      co2Reduced: "42.3 tons",
      fuelSaved: "18,550 gallons",
      maintenanceEfficiency: "+34%"
    },
    departmentEfficiency: {
      "Public Works": 94,
      "Sanitation": 88,
      "Electrical Services": 91,
      "Water Department": 96,
      "Parks & Recreation": 85
    }
  },
  enhancedReports: [
    {
      id: "RPT001",
      citizenId: "user123",
      citizenName: "Sarah Chen",
      type: "Pothole",
      description: "Large pothole on Main Street near the downtown intersection causing vehicle damage and safety hazards.",
      location: {
        address: "Main Street & 1st Avenue, Downtown",
        coordinates: [40.7128, -74.0060],
        accuracy: "High (±3m)",
        district: "Downtown",
        trafficLevel: "High"
      },
      status: "Submitted",
      priority: "High",
      urgencyScore: 8.7,
      aiCategoryConfidence: 0.94,
      submittedAt: "2025-09-22T08:30:00Z",
      estimatedResolution: "2025-09-23T17:00:00Z",
      assignedDepartment: "Public Works",
      hasPhoto: true,
      hasVoiceNote: true,
      estimatedCost: 485,
      communityVotes: 23,
      duplicateReports: 3,
      weatherImpact: "Rain expected - priority increased",
      historicalPattern: "Common issue in this area during fall"
    },
    {
      id: "RPT002",
      citizenId: "user456",
      citizenName: "Michael Rodriguez",
      type: "Streetlight",
      description: "Broken streetlight creating safety hazard for nighttime pedestrians and drivers.",
      location: {
        address: "Oak Avenue & 2nd Street",
        coordinates: [40.7589, -73.9851],
        accuracy: "High (±2m)",
        district: "Midtown",
        crimeRisk: "Medium"
      },
      status: "In Progress",
      priority: "High",
      urgencyScore: 8.1,
      aiCategoryConfidence: 0.97,
      submittedAt: "2025-09-21T14:15:00Z",
      acknowledgedAt: "2025-09-21T16:45:00Z",
      estimatedCompletion: "2025-09-22T18:00:00Z",
      assignedDepartment: "Electrical Services",
      assignedStaff: "John Thompson",
      hasPhoto: true,
      hasVoiceNote: false,
      estimatedCost: 340,
      communityVotes: 17,
      repairProgress: 65,
      partsOrdered: true,
      publicSafety: "Critical after dark"
    },
    {
      id: "RPT003",
      citizenId: "user789",
      citizenName: "Emily Johnson", 
      type: "Trash/Garbage",
      description: "Overflowing waste bins creating unsanitary conditions and pest problems in park area.",
      location: {
        address: "Central Park - East Entrance",
        coordinates: [40.7831, -73.9712],
        accuracy: "Medium (±8m)",
        district: "Upper East",
        footTraffic: "Very High"
      },
      status: "Resolved",
      priority: "Medium",
      urgencyScore: 5.8,
      aiCategoryConfidence: 0.91,
      submittedAt: "2025-09-20T09:20:00Z",
      acknowledgedAt: "2025-09-20T11:30:00Z",
      resolvedAt: "2025-09-21T08:15:00Z",
      assignedDepartment: "Sanitation",
      assignedStaff: "Maria Lopez",
      hasPhoto: true,
      hasVoiceNote: false,
      actualCost: 175,
      resolutionTime: "22h 55m",
      citizenRating: 5,
      citizenFeedback: "Excellent response time! The area looks great now.",
      communityVotes: 31,
      environmentalBenefit: "Prevented pest infestation",
      followUpScheduled: "2025-10-01T00:00:00Z"
    },
    {
      id: "RPT004",
      citizenId: "user234",
      citizenName: "David Kim",
      type: "Water Leak",
      description: "Major water main leak causing street flooding and disrupting local water pressure.",
      location: {
        address: "Elm Street & Broadway",
        coordinates: [40.7505, -73.9934],
        accuracy: "High (±1m)",
        district: "Financial",
        businessImpact: "High"
      },
      status: "Emergency Response",
      priority: "Critical",
      urgencyScore: 9.5,
      aiCategoryConfidence: 0.98,
      submittedAt: "2025-09-22T06:45:00Z",
      acknowledgedAt: "2025-09-22T06:52:00Z",
      crewDispatched: "2025-09-22T07:15:00Z",
      assignedDepartment: "Water Department",
      assignedStaff: "Emergency Team Alpha",
      hasPhoto: true,
      hasVoiceNote: true,
      estimatedCost: 3200,
      communityVotes: 45,
      trafficReroute: true,
      businessesAffected: 12,
      emergencyProtocol: "Level 2 - Infrastructure"
    },
    {
      id: "RPT005",
      citizenId: "user567",
      citizenName: "Lisa Brown",
      type: "Graffiti",
      description: "Vandalism on public building requiring immediate removal due to inappropriate content.",
      location: {
        address: "Public Library - Main Street Side",
        coordinates: [40.7282, -74.0776],
        accuracy: "High (±4m)",
        district: "Downtown",
        visibility: "High Public Exposure"
      },
      status: "Resolved",
      priority: "Medium",
      urgencyScore: 4.5,
      aiCategoryConfidence: 0.89,
      submittedAt: "2025-09-19T13:20:00Z",
      acknowledgedAt: "2025-09-19T15:30:00Z",
      resolvedAt: "2025-09-20T10:45:00Z",
      assignedDepartment: "Parks & Recreation",
      assignedStaff: "Jennifer Davis",
      hasPhoto: true,
      hasVoiceNote: false,
      actualCost: 225,
      resolutionTime: "21h 25m",
      citizenRating: 4,
      citizenFeedback: "Quick professional service, thank you!",
      communityVotes: 19,
      preventiveMeasures: "Anti-graffiti coating applied"
    }
  ],
  trendData: {
    weeklyReports: [45, 52, 38, 61, 47, 55, 42],
    resolutionTimes: [5.2, 4.8, 4.1, 3.6, 3.2],
    satisfactionScores: [4.1, 4.3, 4.5, 4.7, 4.8],
    costSavings: [15000, 28500, 41200, 63800, 87500],
    issueTypes: [
      {type: "Pothole", count: 234, trend: "+12%"},
      {type: "Streetlight", count: 189, trend: "-5%"},
      {type: "Trash", count: 167, trend: "-18%"},
      {type: "Water Leak", count: 89, trend: "+8%"},
      {type: "Graffiti", count: 76, trend: "-22%"}
    ]
  },
  currentUser: {
    id: "user123",
    name: "Sarah Chen",
    role: "Citizen"
  }
};

// Application state
let currentRole = 'Citizen';
let currentView = 'citizen-dashboard';
let isRecording = false;
let hasVoiceNote = false;
let reportCounter = 6;
let isLoadingComplete = false;
let isAutoDemoActive = false;
let demoTourStep = 0;
let charts = {};

// Demo tour steps
const demoSteps = [
  {
    title: "Welcome to Civic Hub",
    description: "Experience the future of civic engagement with AI-powered issue reporting and real-time analytics.",
    target: null
  },
  {
    title: "Smart City Metrics",
    description: "Real-time city health monitoring with live statistics and environmental impact tracking.",
    target: ".live-stats"
  },
  {
    title: "AI-Powered Reporting",
    description: "Report issues using advanced AI analysis that categorizes problems and routes them automatically.",
    target: ".smart-report-btn"
  },
  {
    title: "Predictive Analytics",
    description: "AI insights predict potential issues before they occur, saving time and money.",
    target: ".ai-insights"
  },
  {
    title: "Municipal Dashboard",
    description: "Advanced command center for staff with real-time KPIs and predictive analytics.",
    target: ".command-center"
  }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Civic Hub initializing...');
  // Show loading screen immediately
  showLoadingScreen();
  initializeLoadingScreen();
});

// Ensure loading screen is visible
function showLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'flex';
    loadingScreen.classList.remove('hidden');
  }
}

// Loading Screen with Animated Stats
function initializeLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressFill = document.getElementById('loading-progress-fill');
  const loadingText = document.getElementById('loading-text');
  
  if (!loadingScreen) {
    // If loading screen doesn't exist, skip directly to app
    initializeApp();
    return;
  }
  
  const steps = [
    { text: "Initializing Smart City Systems...", progress: 20 },
    { text: "Loading AI Analytics Engine...", progress: 40 },
    { text: "Connecting to Municipal Database...", progress: 60 },
    { text: "Calibrating Predictive Models...", progress: 80 },
    { text: "Ready for Operation!", progress: 100 }
  ];
  
  // Animate loading stats
  animateLoadingStats();
  
  let currentStep = 0;
  const stepInterval = setInterval(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      if (loadingText) loadingText.textContent = step.text;
      if (progressFill) progressFill.style.width = step.progress + '%';
      currentStep++;
    } else {
      clearInterval(stepInterval);
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.classList.add('hidden');
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }
        initializeApp();
      }, 500);
    }
  }, 800);
}

function animateLoadingStats() {
  const statValues = document.querySelectorAll('.loading-stat .stat-value');
  statValues.forEach(stat => {
    const target = parseInt(stat.dataset.target);
    if (target) {
      animateNumber(stat, 0, target, 2000);
    }
  });
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now();
  const range = end - start;
  
  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (range * easeOut));
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }
  
  requestAnimationFrame(updateNumber);
}

function initializeApp() {
  console.log('🎯 App initialized with enhanced features');
  isLoadingComplete = true;
  setupEventListeners();
  switchRole(currentRole);
  showView(currentView);
  updateRealTimeData();
  initializeCharts();
  startRealTimeUpdates();
  renderReports();
  
  // Show demo tour after brief delay
  setTimeout(() => {
    if (!sessionStorage.getItem('demo-tour-completed')) {
      showDemoTour();
    }
  }, 1500);
}

function showDemoTour() {
  const demoTour = document.getElementById('demo-tour');
  if (!demoTour) return;
  
  demoTour.classList.remove('hidden');
  updateDemoStep();
  
  // Reset tour step
  demoTourStep = 0;
  updateDemoStep();
}

function updateDemoStep() {
  const step = demoSteps[demoTourStep];
  const title = document.getElementById('demo-title');
  const description = document.getElementById('demo-description');
  const nextBtn = document.getElementById('next-step');
  
  if (title) title.textContent = step.title;
  if (description) description.textContent = step.description;
  if (nextBtn) {
    nextBtn.textContent = demoTourStep === demoSteps.length - 1 ? 'Start Using Civic Hub' : 'Next';
  }
}

function nextDemoStep() {
  if (demoTourStep < demoSteps.length - 1) {
    demoTourStep++;
    updateDemoStep();
    
    // Switch to staff view for municipal dashboard step
    if (demoTourStep === 4) {
      switchRole('Municipal Staff');
    }
  } else {
    hideDemoTour();
  }
}

function hideDemoTour() {
  const demoTour = document.getElementById('demo-tour');
  if (demoTour) {
    demoTour.classList.add('hidden');
    sessionStorage.setItem('demo-tour-completed', 'true');
  }
  // Switch back to citizen view
  switchRole('Citizen');
}

function setupEventListeners() {
  // Role switching
  const roleButtons = document.querySelectorAll('.role-btn');
  roleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const role = btn.dataset.role;
      switchRole(role);
    });
  });

  // Navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      if (view) {
        showView(view);
        updateNavigation(view);
      }
    });
  });

  // Smart report button
  const smartReportBtn = document.getElementById('smart-report-btn');
  smartReportBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showView('report-form');
    updateNavigation('report-form');
    showToast('🤖 AI analysis engine ready!', 'info');
  });

  // Back button
  const backBtn = document.getElementById('back-to-dashboard');
  backBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showView('citizen-dashboard');
    updateNavigation('citizen-dashboard');
  });

  // Demo mode button - Fix the reference
  const demoModeBtn = document.getElementById('auto-demo');
  demoModeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    startAutoDemo();
  });

  // Export data button
  const exportBtn = document.getElementById('export-data');
  exportBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    exportAnalytics();
  });

  // Demo tour buttons
  const skipBtn = document.getElementById('skip-tour');
  const nextBtn = document.getElementById('next-step');
  
  skipBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    hideDemoTour();
  });
  
  nextBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    nextDemoStep();
  });

  // Photo upload
  setupPhotoUpload();
  
  // Location detection
  const detectLocationBtn = document.getElementById('detect-location');
  detectLocationBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    detectLocation();
  });

  // Voice recording
  const voiceBtn = document.getElementById('voice-btn');
  voiceBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleVoiceRecording();
  });

  // Form submission
  const reportForm = document.getElementById('issue-form');
  reportForm?.addEventListener('submit', handleSmartFormSubmission);

  // Filters
  setupFilters();
  
  // Form enhancements
  setupFormEnhancements();

  // Cancel report
  const cancelBtn = document.getElementById('cancel-report');
  cancelBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to cancel? All entered data will be lost.')) {
      resetForm();
      showView('citizen-dashboard');
      updateNavigation('citizen-dashboard');
    }
  });

  // Modal close
  const modalClose = document.getElementById('modal-close');
  modalClose?.addEventListener('click', closeModal);
}

function setupPhotoUpload() {
  const photoInput = document.getElementById('photo-input');
  const photoUploadArea = document.getElementById('photo-upload-area');
  const removePhotoBtn = document.getElementById('remove-photo');
  
  photoUploadArea?.addEventListener('click', () => photoInput?.click());
  photoInput?.addEventListener('change', handleEnhancedPhotoUpload);
  removePhotoBtn?.addEventListener('click', removePhoto);
}

function handleEnhancedPhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewImage = document.getElementById('preview-image');
      const photoUploadArea = document.getElementById('photo-upload-area');
      const photoPreview = document.getElementById('photo-preview');
      
      if (previewImage && photoUploadArea && photoPreview) {
        previewImage.src = e.target.result;
        photoUploadArea.style.display = 'none';
        photoPreview.style.display = 'block';
        
        // Simulate AI analysis
        simulateAIAnalysis();
      }
    };
    reader.readAsDataURL(file);
  }
}

function simulateAIAnalysis() {
  const analysisText = document.querySelector('.analysis-text');
  const confidenceScore = document.getElementById('confidence-score');
  const aiSuggestions = document.getElementById('ai-suggestions');
  const suggestionList = document.getElementById('suggestion-list');
  const issueTypeSelect = document.getElementById('issue-type-select');
  
  if (analysisText) {
    analysisText.textContent = 'Analyzing image...';
    
    setTimeout(() => {
      analysisText.textContent = 'Pothole detected in road surface';
      if (confidenceScore) confidenceScore.textContent = '94% confident';
      
      // Show AI suggestions
      if (aiSuggestions) aiSuggestions.style.display = 'block';
      if (suggestionList) {
        suggestionList.innerHTML = `
          <div class="suggestion-item" onclick="selectSuggestion('Pothole')">🕳️ Pothole (94%)</div>
          <div class="suggestion-item" onclick="selectSuggestion('Road Damage')">🛣️ Road Damage (78%)</div>
        `;
      }
      
      // Auto-select suggested type
      if (issueTypeSelect) issueTypeSelect.value = 'Pothole';
      
      showToast('🤖 AI analysis complete! Issue categorized as Pothole', 'success');
    }, 2000);
  }
}

function selectSuggestion(type) {
  const issueTypeSelect = document.getElementById('issue-type-select');
  if (issueTypeSelect) {
    issueTypeSelect.value = type;
    showToast(`✅ Selected: ${type}`, 'success');
  }
}

function detectLocation() {
  const detectLocationBtn = document.getElementById('detect-location');
  const locationText = document.getElementById('location-text');
  const locationDetails = document.getElementById('location-details');
  const accuracyBadge = document.getElementById('location-accuracy');
  
  if (detectLocationBtn) {
    detectLocationBtn.disabled = true;
    detectLocationBtn.innerHTML = `
      <div class="btn-spinner" style="display: block; margin-right: 8px; width: 16px; height: 16px; border: 2px solid transparent; border-top: 2px solid currentColor; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      Detecting...
    `;
  }
  
  setTimeout(() => {
    if (locationText) locationText.textContent = 'Main Street & 1st Avenue, Downtown';
    if (locationDetails) {
      locationDetails.innerHTML = `
        <div>📍 Coordinates: 40.7128, -74.0060</div>
        <div>🚦 Traffic Level: High</div>
        <div>🏢 District: Downtown Business</div>
      `;
    }
    if (accuracyBadge) accuracyBadge.textContent = '±2m accuracy';
    
    if (detectLocationBtn) {
      detectLocationBtn.disabled = false;
      detectLocationBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
        </svg>
        Location Detected ✓
      `;
    }
    
    showToast('📍 High-precision location detected!', 'success');
    updatePriorityAssessment();
  }, 1500);
}

function updatePriorityAssessment() {
  const urgencyScore = document.getElementById('urgency-score');
  
  if (urgencyScore) {
    let score = 5.2;
    const interval = setInterval(() => {
      score += 0.1;
      urgencyScore.textContent = score.toFixed(1);
      if (score >= 8.7) {
        clearInterval(interval);
        showToast('⚠️ High priority detected due to traffic impact', 'warning');
      }
    }, 100);
  }
}

function toggleVoiceRecording() {
  if (!isRecording) {
    startVoiceRecording();
  } else {
    stopVoiceRecording();
  }
}

function startVoiceRecording() {
  isRecording = true;
  const voiceBtn = document.getElementById('voice-btn');
  const voiceStatus = document.getElementById('voice-status');
  
  if (voiceBtn) voiceBtn.classList.add('recording');
  if (voiceStatus) voiceStatus.textContent = 'Recording... (tap to stop)';
  
  showToast('🎤 Voice recording started', 'info');
  
  setTimeout(() => {
    if (isRecording) stopVoiceRecording();
  }, 3000);
}

function stopVoiceRecording() {
  isRecording = false;
  hasVoiceNote = true;
  
  const voiceBtn = document.getElementById('voice-btn');
  const voiceStatus = document.getElementById('voice-status');
  const voicePlayback = document.getElementById('voice-playback');
  const voiceTranscript = document.getElementById('voice-transcript');
  
  if (voiceBtn) voiceBtn.classList.remove('recording');
  if (voiceStatus) voiceStatus.textContent = 'Voice note recorded ✓';
  if (voicePlayback) voicePlayback.style.display = 'flex';
  if (voiceTranscript) {
    voiceTranscript.textContent = '"Large pothole on Main Street causing vehicle damage. Very dangerous during rush hour."';
  }
  
  showToast('🎤 Voice-to-text conversion complete!', 'success');
  
  // Auto-fill description if empty
  const descriptionField = document.querySelector('textarea[name="description"]');
  if (descriptionField && !descriptionField.value) {
    descriptionField.value = 'Large pothole on Main Street causing vehicle damage. Very dangerous during rush hour.';
  }
}

function handleSmartFormSubmission(event) {
  event.preventDefault();
  
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');
  
  // Show enhanced loading state
  submitBtn.disabled = true;
  if (btnText) btnText.style.display = 'none';
  if (btnSpinner) btnSpinner.style.display = 'block';
  
  showToast('🤖 AI processing your report...', 'info');
  
  // Simulate AI processing steps
  const processingSteps = [
    { message: '📊 Analyzing priority factors...', delay: 1000 },
    { message: '🎯 Routing to optimal department...', delay: 1500 },
    { message: '⚡ Creating smart work order...', delay: 2000 },
    { message: '✅ Report submitted successfully!', delay: 2500 }
  ];
  
  processingSteps.forEach((step, index) => {
    setTimeout(() => {
      showToast(step.message, index === processingSteps.length - 1 ? 'success' : 'info');
    }, step.delay);
  });
  
  setTimeout(() => {
    const formData = new FormData(event.target);
    const locationText = document.getElementById('location-text');
    
    const newReport = {
      id: `RPT${String(reportCounter).padStart(3, '0')}`,
      citizenId: hackathonData.currentUser.id,
      citizenName: hackathonData.currentUser.name,
      type: formData.get('issueType'),
      description: formData.get('description'),
      location: {
        address: locationText ? locationText.textContent : 'Main Street & 1st Avenue',
        coordinates: [40.7128 + Math.random() * 0.1, -74.0060 + Math.random() * 0.1],
        accuracy: "High (±2m)",
        district: "Downtown"
      },
      status: 'Submitted',
      priority: 'High',
      urgencyScore: 8.7,
      aiCategoryConfidence: 0.94,
      submittedAt: new Date().toISOString(),
      estimatedResolution: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      assignedDepartment: 'Public Works',
      hasPhoto: true,
      hasVoiceNote: hasVoiceNote,
      estimatedCost: Math.floor(Math.random() * 500) + 200
    };
    
    hackathonData.enhancedReports.unshift(newReport);
    reportCounter++;
    
    // Reset form and navigate
    resetForm();
    submitBtn.disabled = false;
    if (btnText) btnText.style.display = 'block';
    if (btnSpinner) btnSpinner.style.display = 'none';
    
    showView('my-reports');
    updateNavigation('my-reports');
    renderReports();
    updateRealTimeData();
    
    // Show celebration
    showToast('🎉 Your report is making a difference!', 'success');
  }, 3000);
}

function resetForm() {
  const reportForm = document.getElementById('issue-form');
  const photoUploadArea = document.getElementById('photo-upload-area');
  const photoPreview = document.getElementById('photo-preview');
  const aiSuggestions = document.getElementById('ai-suggestions');
  const voicePlayback = document.getElementById('voice-playback');
  
  reportForm?.reset();
  
  if (photoUploadArea) photoUploadArea.style.display = 'block';
  if (photoPreview) photoPreview.style.display = 'none';
  if (aiSuggestions) aiSuggestions.style.display = 'none';
  if (voicePlayback) voicePlayback.style.display = 'none';
  
  isRecording = false;
  hasVoiceNote = false;
}

function switchRole(role) {
  currentRole = role;
  
  const roleButtons = document.querySelectorAll('.role-btn');
  roleButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === role);
  });

  const citizenInterface = document.getElementById('citizen-interface');
  const staffInterface = document.getElementById('staff-interface');
  const bottomNav = document.getElementById('bottom-nav');
  
  if (role === 'Citizen') {
    citizenInterface?.classList.add('active');
    staffInterface?.classList.remove('active');
    if (bottomNav) bottomNav.style.display = 'flex';
    showView('citizen-dashboard');
    updateNavigation('citizen-dashboard');
  } else {
    citizenInterface?.classList.remove('active');
    staffInterface?.classList.add('active');
    if (bottomNav) bottomNav.style.display = 'none';
    // Initialize staff charts when switching to staff view
    setTimeout(() => {
      initializeCharts();
      renderReports();
    }, 100);
  }
  
  showToast(`🔄 Switched to ${role} interface`, 'info');
}

function showView(viewId) {
  currentView = viewId;
  
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.classList.remove('active'));
  
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
  }
}

function updateNavigation(viewId) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewId);
  });
}

function initializeCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded, skipping chart initialization');
    return;
  }

  // Department Performance Chart
  const deptCtx = document.getElementById('department-chart');
  if (deptCtx && !charts.department) {
    charts.department = new Chart(deptCtx, {
      type: 'bar',
      data: {
        labels: Object.keys(hackathonData.hackathonMetrics.departmentEfficiency),
        datasets: [{
          label: 'Efficiency Score',
          data: Object.values(hackathonData.hackathonMetrics.departmentEfficiency),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: 'Efficiency %' }
          }
        }
      }
    });
  }

  // Trends Chart
  const trendsCtx = document.getElementById('trends-chart');
  if (trendsCtx && !charts.trends) {
    charts.trends = new Chart(trendsCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Response Time (hours)',
          data: hackathonData.trendData.resolutionTimes,
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Hours' }
          }
        }
      }
    });
  }

  // Health Score Mini Chart
  const healthCtx = document.getElementById('health-score-chart');
  if (healthCtx && !charts.health) {
    charts.health = new Chart(healthCtx, {
      type: 'line',
      data: {
        labels: Array.from({length: 30}, (_, i) => i + 1),
        datasets: [{
          data: Array.from({length: 30}, () => 85 + Math.random() * 10),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { 
          x: { display: false },
          y: { display: false, min: 80, max: 100 }
        },
        interaction: { intersect: false }
      }
    });
  }
}

function updateRealTimeData() {
  // Update live statistics
  const liveReports = document.getElementById('live-reports');
  if (liveReports) {
    const current = parseInt(liveReports.textContent.replace(/,/g, ''));
    liveReports.textContent = (current + Math.floor(Math.random() * 3)).toLocaleString();
  }
  
  // Update KPI values with slight variations
  const kpiValues = document.querySelectorAll('.kpi-value');
  kpiValues.forEach(kpi => {
    if (kpi.textContent.includes('%')) {
      const current = parseInt(kpi.textContent);
      const variation = Math.floor(Math.random() * 3) - 1;
      kpi.innerHTML = `${current + variation}<span class="kpi-unit">%</span>`;
    }
  });
}

function startRealTimeUpdates() {
  setInterval(updateRealTimeData, 10000); // Update every 10 seconds
  
  // Simulate real-time report updates
  setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance every 15 seconds
      showToast('📊 New report submitted in Financial District', 'info');
    }
  }, 15000);
}

function renderReports() {
  renderCitizenReports();
  renderStaffReports();
}

function renderCitizenReports() {
  const container = document.getElementById('citizen-reports-list');
  if (!container) return;
  
  const userReports = hackathonData.enhancedReports.filter(
    report => report.citizenId === hackathonData.currentUser.id
  );
  
  container.innerHTML = userReports.map(report => `
    <div class="report-card enhanced" data-priority="${report.priority}" onclick="showEnhancedReportDetails('${report.id}')">
      <div class="report-header">
        <div class="report-id">${report.id}</div>
        <div class="report-type">${getIssueIcon(report.type)} ${report.type}</div>
      </div>
      <div class="report-description">${report.description}</div>
      <div class="report-meta">
        <div class="report-location">📍 ${report.location.address}</div>
        <div class="report-date">${formatDate(report.submittedAt)}</div>
      </div>
      ${generateProgressBar(report)}
      <div class="report-footer">
        <div class="status status--${getStatusClass(report.status)}">${report.status}</div>
        <div class="urgency-badge">⚡ ${report.urgencyScore}/10</div>
      </div>
    </div>
  `).join('');
}

function renderStaffReports() {
  const container = document.getElementById('staff-reports-list');
  if (!container) return;
  
  const reports = getFilteredReports();
  
  container.innerHTML = reports.map(report => `
    <div class="report-card enhanced" data-priority="${report.priority}" onclick="showEnhancedReportDetails('${report.id}')">
      <div class="report-header">
        <div class="report-id">${report.id}</div>
        <div class="report-badges">
          <div class="priority-badge priority-${report.priority.toLowerCase()}">${report.priority}</div>
          <div class="ai-badge">🤖 ${Math.round(report.aiCategoryConfidence * 100)}%</div>
        </div>
      </div>
      <div class="report-content">
        <div class="report-type-icon">${getIssueIcon(report.type)}</div>
        <div class="report-details">
          <div class="report-title">${report.type} - ${report.location.district}</div>
          <div class="report-description">${report.description}</div>
          <div class="report-meta">
            <span>📍 ${report.location.address}</span>
            <span>👤 ${report.citizenName}</span>
            <span>📅 ${formatDate(report.submittedAt)}</span>
          </div>
        </div>
      </div>
      <div class="report-actions">
        ${generateStaffActions(report)}
      </div>
    </div>
  `).join('');
}

function getIssueIcon(type) {
  const icons = {
    'Pothole': '🕳️',
    'Streetlight': '💡',
    'Trash/Garbage': '🗑️',
    'Graffiti': '🎨',
    'Water Leak': '💧',
    'Road Damage': '🛣️',
    'Noise Complaint': '🔊'
  };
  return icons[type] || '❓';
}

function generateProgressBar(report) {
  const steps = ['Submitted', 'Acknowledged', 'In Progress', 'Resolved'];
  const currentStep = steps.indexOf(report.status) >= 0 ? steps.indexOf(report.status) : 
                     report.status === 'Emergency Response' ? 2 : 0;
  
  return `
    <div class="progress-container">
      <div class="progress-bar">
        ${steps.map((step, index) => `
          <div class="progress-step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'current' : ''}">
            ${index + 1}
          </div>
        `).join('')}
      </div>
      <div class="progress-labels">
        ${steps.map(step => `<div class="progress-label">${step}</div>`).join('')}
      </div>
    </div>
  `;
}

function generateStaffActions(report) {
  switch (report.status) {
    case 'Submitted':
      return `<button class="btn btn--sm btn--primary" onclick="event.stopPropagation(); updateReportStatus('${report.id}', 'Acknowledged')">🔄 Acknowledge</button>`;
    case 'Acknowledged':
    case 'In Progress':
    case 'Emergency Response':
      return `<button class="btn btn--sm btn--success" onclick="event.stopPropagation(); updateReportStatus('${report.id}', 'Resolved')">✅ Mark Resolved</button>`;
    default:
      return `<span class="resolved-badge">✅ Complete</span>`;
  }
}

function getFilteredReports() {
  const statusFilter = document.getElementById('status-filter')?.value || '';
  const priorityFilter = document.getElementById('priority-filter')?.value || '';
  const departmentFilter = document.getElementById('department-filter')?.value || '';
  
  return hackathonData.enhancedReports.filter(report => {
    const statusMatch = !statusFilter || report.status === statusFilter;
    const priorityMatch = !priorityFilter || report.priority === priorityFilter;
    const departmentMatch = !departmentFilter || report.assignedDepartment === departmentFilter;
    return statusMatch && priorityMatch && departmentMatch;
  });
}

function setupFilters() {
  const filters = ['status-filter', 'priority-filter', 'department-filter'];
  filters.forEach(filterId => {
    const filter = document.getElementById(filterId);
    filter?.addEventListener('change', renderStaffReports);
  });
}

function setupFormEnhancements() {
  // Real-time description analysis
  const descriptionField = document.querySelector('textarea[name="description"]');
  if (descriptionField) {
    descriptionField.addEventListener('input', analyzeDescription);
  }
}

function analyzeDescription(event) {
  const text = event.target.value;
  const insights = document.getElementById('description-insights');
  
  if (text.length > 20 && insights) {
    let analysisText = '💡 ';
    
    if (text.toLowerCase().includes('urgent') || text.toLowerCase().includes('emergency')) {
      analysisText += 'High urgency detected - priority increased';
    } else if (text.toLowerCase().includes('safety') || text.toLowerCase().includes('danger')) {
      analysisText += 'Safety concern identified - routing to priority queue';
    } else {
      analysisText += 'Good detail level - helps with faster resolution';
    }
    
    insights.innerHTML = `<div class="insight">${analysisText}</div>`;
  }
}

function showEnhancedReportDetails(reportId) {
  const report = hackathonData.enhancedReports.find(r => r.id === reportId);
  if (!report) return;
  
  const modal = document.getElementById('report-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = `${getIssueIcon(report.type)} Report ${report.id}`;
  modalBody.innerHTML = `
    <div class="enhanced-report-details">
      <div class="detail-header">
        <div class="detail-badges">
          <span class="priority-badge priority-${report.priority.toLowerCase()}">${report.priority} Priority</span>
          <span class="status-badge status-${getStatusClass(report.status)}">${report.status}</span>
          <span class="ai-badge">🤖 ${Math.round(report.aiCategoryConfidence * 100)}% AI Confidence</span>
        </div>
        <div class="urgency-score">⚡ Urgency: ${report.urgencyScore}/10</div>
      </div>
      
      <div class="detail-grid">
        <div class="detail-section">
          <h4>📋 Issue Details</h4>
          <p><strong>Type:</strong> ${report.type}</p>
          <p><strong>Description:</strong> ${report.description}</p>
          <p><strong>Reporter:</strong> ${report.citizenName}</p>
        </div>
        
        <div class="detail-section">
          <h4>📍 Location Intelligence</h4>
          <p><strong>Address:</strong> ${report.location.address}</p>
          <p><strong>District:</strong> ${report.location.district}</p>
          <p><strong>Accuracy:</strong> ${report.location.accuracy || 'High (±3m)'}</p>
          ${report.location.trafficLevel ? `<p><strong>Traffic Impact:</strong> ${report.location.trafficLevel}</p>` : ''}
        </div>
        
        <div class="detail-section">
          <h4>🏛️ Municipal Info</h4>
          <p><strong>Department:</strong> ${report.assignedDepartment}</p>
          ${report.assignedStaff ? `<p><strong>Assigned Staff:</strong> ${report.assignedStaff}</p>` : ''}
          <p><strong>Estimated Cost:</strong> $${report.estimatedCost || report.actualCost || 'N/A'}</p>
        </div>
        
        <div class="detail-section">
          <h4>📊 Analytics</h4>
          <p><strong>Community Votes:</strong> ${report.communityVotes || 0}</p>
          ${report.duplicateReports ? `<p><strong>Similar Reports:</strong> ${report.duplicateReports}</p>` : ''}
          ${report.weatherImpact ? `<p><strong>Weather Impact:</strong> ${report.weatherImpact}</p>` : ''}
          ${report.historicalPattern ? `<p><strong>Pattern:</strong> ${report.historicalPattern}</p>` : ''}
        </div>
      </div>
      
      <div class="timeline-section">
        <h4>📅 Timeline</h4>
        <div class="detail-timeline">
          <div class="timeline-item completed">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <strong>Submitted</strong> - ${formatDateTime(report.submittedAt)}
            </div>
          </div>
          ${report.acknowledgedAt ? `
            <div class="timeline-item completed">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <strong>Acknowledged</strong> - ${formatDateTime(report.acknowledgedAt)}
              </div>
            </div>
          ` : ''}
          ${report.resolvedAt ? `
            <div class="timeline-item completed">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <strong>Resolved</strong> - ${formatDateTime(report.resolvedAt)}
                ${report.resolutionTime ? `<br><em>Resolution time: ${report.resolutionTime}</em>` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
      
      ${report.citizenFeedback ? `
        <div class="feedback-section">
          <h4>💬 Citizen Feedback</h4>
          <div class="feedback-content">
            <div class="rating">
              ${'★'.repeat(report.citizenRating || 0)}${'☆'.repeat(5 - (report.citizenRating || 0))}
            </div>
            <p>"${report.citizenFeedback}"</p>
          </div>
        </div>
      ` : ''}
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function updateReportStatus(reportId, newStatus) {
  const report = hackathonData.enhancedReports.find(r => r.id === reportId);
  if (!report) return;
  
  report.status = newStatus;
  
  if (newStatus === 'Acknowledged') {
    report.acknowledgedAt = new Date().toISOString();
  } else if (newStatus === 'Resolved') {
    report.resolvedAt = new Date().toISOString();
    report.resolutionTime = calculateResolutionTime(report.submittedAt, report.resolvedAt);
  }
  
  renderReports();
  updateRealTimeData();
  showToast(`✅ Report ${reportId} updated to ${newStatus}`, 'success');
}

function calculateResolutionTime(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffHours = Math.round((end - start) / (1000 * 60 * 60) * 10) / 10;
  return `${diffHours}h`;
}

function startAutoDemo() {
  if (isAutoDemoActive) {
    stopAutoDemo();
    return;
  }
  
  isAutoDemoActive = true;
  const demoBtn = document.getElementById('auto-demo');
  if (demoBtn) {
    demoBtn.innerHTML = '<span class="demo-icon">⏹️</span> Stop Demo';
  }
  
  showToast('🎬 Auto demo starting - showcasing key features', 'info');
  
  // Demo sequence
  const demoSequence = [
    () => { 
      switchRole('Citizen'); 
      showToast('👤 Citizen Interface - Intuitive reporting', 'info'); 
    },
    () => { 
      showView('report-form'); 
      updateNavigation('report-form');
      showToast('📝 Smart reporting with AI assistance', 'info'); 
    },
    () => { 
      switchRole('Municipal Staff'); 
      showToast('👷 Staff Dashboard - Real-time analytics', 'info'); 
    },
    () => { 
      showToast('📊 Predictive insights and performance metrics', 'info'); 
    },
    () => { 
      showToast('🎯 Auto demo complete - Ready for live interaction!', 'success'); 
      stopAutoDemo(); 
    }
  ];
  
  demoSequence.forEach((step, index) => {
    setTimeout(step, index * 4000);
  });
}

function stopAutoDemo() {
  isAutoDemoActive = false;
  const demoBtn = document.getElementById('auto-demo');
  if (demoBtn) {
    demoBtn.innerHTML = '🎬 Auto Demo';
  }
}

function exportAnalytics() {
  const data = {
    timestamp: new Date().toISOString(),
    metrics: hackathonData.hackathonMetrics,
    reports: hackathonData.enhancedReports.length,
    performance: {
      avgResponseTime: hackathonData.hackathonMetrics.avgResponseTime,
      satisfaction: hackathonData.hackathonMetrics.citizenSatisfaction,
      costSavings: hackathonData.hackathonMetrics.costSavings
    }
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `civic-hub-analytics-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  showToast('📊 Analytics data exported successfully!', 'success');
}

// Enhanced Toast System
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toast-container') || createToastContainer();
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };
  
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
      <div class="toast-message">${message}</div>
      <button class="toast-close">×</button>
    </div>
  `;
  
  container.appendChild(toast);
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Auto-hide
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
  
  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  });
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

function removePhoto() {
  const photoInput = document.getElementById('photo-input');
  const photoUploadArea = document.getElementById('photo-upload-area');
  const photoPreview = document.getElementById('photo-preview');
  const aiSuggestions = document.getElementById('ai-suggestions');
  
  if (photoInput) photoInput.value = '';
  if (photoUploadArea) photoUploadArea.style.display = 'block';
  if (photoPreview) photoPreview.style.display = 'none';
  if (aiSuggestions) aiSuggestions.style.display = 'none';
}

// Modal management
function closeModal() {
  const modal = document.getElementById('report-modal');
  if (modal) modal.classList.add('hidden');
}

// Utility functions
function getStatusClass(status) {
  const statusClasses = {
    'Submitted': 'info',
    'Acknowledged': 'warning',
    'In Progress': 'warning',
    'Emergency Response': 'error',
    'Resolved': 'success'
  };
  return statusClasses[status] || 'info';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays < 7) {
    return `${diffDays}d ago`;
  } else {
    return date.toLocaleDateString();
  }
}

function formatDateTime(dateString) {
  return new Date(dateString).toLocaleString();
}

// Initialize when DOM loads
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
    closeModal();
  }
});

// Global functions for onclick handlers
window.showEnhancedReportDetails = showEnhancedReportDetails;
window.updateReportStatus = updateReportStatus;
window.selectSuggestion = selectSuggestion;
window.closeModal = closeModal;