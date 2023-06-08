package neomu.simsimhae.exception;

public class CustomException extends IllegalArgumentException {

	public CustomException(String string) {
		super(string);
	}

	@Override
	public String getMessage() {
		return super.getMessage();
	}
	
}
