using Microsoft.AspNetCore.Mvc;

namespace JewelryFlashCards.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseController : ControllerBase
{
    protected readonly ILogger<BaseController> Logger;
    
    public BaseController(ILogger<BaseController> logger)
    {
        Logger = logger;
    }
}