React.useEffect(() => {
    const timer = setTimeout(() => {
      const animatedImg = document.getElementById('animated-profile');
      const gridSection = document.getElementById('profile-grid-section');
      
      if (animatedImg && gridSection) {
        const rect = gridSection.getBoundingClientRect();
        
        // Calculate the center point of the grid cell
        const gridCenterX = rect.left + rect.width / 2;
        const gridCenterY = rect.top + rect.height / 2;
        
        // Move image to grid position - maintaining center point origin
        animatedImg.style.top = `${gridCenterY}px`;
        animatedImg.style.left = `${gridCenterX}px`;
        animatedImg.style.width = `${rect.width}px`;
        animatedImg.style.height = `${rect.height}px`;
        
        // After animation completes, hide animated image and show content
        setTimeout(() => {
          animatedImg.style.visibility = 'hidden';
          setIsLoading(false);
        }, 1400);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);
