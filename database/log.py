from config import log_dir
import logging 


# Setup

FORMAT = '[%(asctime)s] %(levelname)s: %(message)s'
logging.basicConfig(format=FORMAT, level=logging.DEBUG)

# Create Handler

debug_handler = logging.FileHandler(filename=f'{log_dir}/debug.log', mode='a')
warning_handler = logging.FileHandler(filename=f'{log_dir}/warning.log', mode='a')
error_handler = logging.FileHandler(filename=f'{log_dir}/error.log', mode='a')

# Creater Formatter

formatter_error = logging.Formatter('[%(asctime)s] %(levelname)s | In File %(filename)s In Function %(funcName)s: %(message)s')
formatter_a = logging.Formatter(FORMAT)

# Create Filter

class DebugFilter(logging.Filter):
    def filter(self, record):
        if record.levelname == "DEBUG":
            return True
        
class WarningFilter(logging.Filter):
    def filter(self, record):
        if record.levelname == "WARNING":
            return True
        
class ErrorFilter(logging.Filter):
    def filter(self, record):
        if record.levelname == "ERROR":
            return True
    
# Set Formatter

debug_handler.setFormatter(formatter_a)
warning_handler.setFormatter(formatter_a)
error_handler.setFormatter(formatter_error)

# Add Filter

debug_handler.addFilter(DebugFilter())
warning_handler.addFilter(WarningFilter())
error_handler.addFilter(ErrorFilter())

# Create Logging Object

logger = logging.getLogger(__name__)

# Add Handler

logger.addHandler(debug_handler)
logger.addHandler(warning_handler)
logger.addHandler(error_handler)


def main():
    pass

if __name__ == '__main__':
    main()