// scripts.js

// 🌙 Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// 📂 Handle Sidebar Navigation
function changeView(view) {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = `<h2>${view} Page Coming Soon!</h2>`;
}

// ➕ Floating Action Button Click Event
const fab = document.querySelector('.fab');
fab.addEventListener('click', () => {
  alert('Quick Action Clicked!');
});

// 📊 Initialize Charts
window.onload = function () {
  // Line Chart (Expense vs Income)
  const ctx1 = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Income',
          data: [4000, 4500, 4200, 4700, 5000],
          borderColor: '#4CAF50',
          fill: false,
          tension: 0.3,
        },
        {
          label: 'Expenses',
          data: [2500, 3000, 2800, 3200, 3500],
          borderColor: '#F44336',
          fill: false,
          tension: 0.3,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  });

  // Pie Chart (Category-wise Spending)
  const ctx2 = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Food', 'Transport', 'Entertainment', 'Shopping', 'Utilities'],
      datasets: [
        {
          data: [300, 150, 100, 200, 250],
          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0', '#9966FF'],
          hoverOffset: 4,
        }
      ]
    },
    options: {
      responsive: true,
    },
  });
};
