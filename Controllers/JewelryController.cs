using JewelryFlashCards.Models;
using Microsoft.AspNetCore.Mvc;

namespace JewelryFlashCards.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JewelryController
{
    private readonly ILogger<WeatherForecastController> _logger;

    public JewelryController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    public async Task<IActionResult> GetAnatometalJewelry()
    {
        
    }
}