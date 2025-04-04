document.getElementById('checkGid').addEventListener('click', () => {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Checking GID cookie...';
  statusDiv.className = 'checking';

  chrome.cookies.get(
    { url: "https://warframe.com", name: "gid" },
    (cookie) => {
      if (chrome.runtime.lastError) {
        statusDiv.innerHTML = `<span class="status-text">Error: ${chrome.runtime.lastError.message}</span>`;
        statusDiv.className = 'error';
        return;
      }

      if (cookie) {
        const copyIcon = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
        `;
        
        statusDiv.innerHTML = `
          <span class="status-text">GID Cookie found: ${cookie.value}</span>
          <button class="copy-button" title="Copy GID">${copyIcon}</button>
        `;
        statusDiv.className = 'success';

        // Add click handler for copy button
        const copyButton = statusDiv.querySelector('.copy-button');
        copyButton.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(cookie.value);
            const checkIcon = `
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            `;
            copyButton.innerHTML = checkIcon;
            setTimeout(() => {
              copyButton.innerHTML = copyIcon;
            }, 1000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        });
      } else {
        statusDiv.innerHTML = `<span class="status-text">No GID cookie found. Please log in to Warframe.com first.</span>`;
        statusDiv.className = 'error';
      }
    }
  );
}); 